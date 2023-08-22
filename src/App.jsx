import React, { useMemo, useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';
import Input from './components/UI/input/Input';

const App = () => {
   const [posts, setPosts] = useState([
      {
         id: 1,
         title: 'JavaScript',
         body: 'Description'
      },
      {
         id: 2,
         title: 'TypeScript',
         body: 'Description'
      }
   ]);

   // с помощью хука useRef мы можем получать напрямую доступ к DOM-элементу
   // const bodyInputRef = useRef();
   /* const addNewPost = (event) => {
      event.preventDefault(); // чтоб не обновлялась страница после отправки формы
      console.log(title); // получаем из useState
      console.log(bodyInputRef.current.value); // получаем из useRef
      setPosts([...posts, { ...post, id: Date.now() }]);
      setPost({ title: '', body: '' });
   }; */

   const [selectedSort, setSelectedSort] = useState('');
   const [searchQuery, setSearchQuery] = useState('');

   const sortedPosts = useMemo(() => {
      // console.log('useMemo'); // вызывается в начале и потом ждет, когда потребуется сортровка
      if (selectedSort) {
         return [...posts].sort((a, b) =>
            a[selectedSort].localeCompare(b[selectedSort])
         );
      }

      return posts;
   }, [selectedSort, posts]);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
   }, [searchQuery, sortedPosts]);

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
   };

   const sortPosts = (sort) => {
      setSelectedSort(sort);
      // т.к. функция sort не возвращает новый отсортированный массив, а мутирует тот массив, к которому эта функция была применена
      // и состояние напрямую изменять нельзя, мы заспредим посты в новый массив и уже к нему применим функцию сортировки
      // тоесть в данном случае мы мутируем копию массива и не мутируем состояние напрямую

      // localeCompare - эта функция предназначена для сравнения строк и чаще всего используется при сортировке
   };

   return (
      <div className='App'>
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         <PostForm create={createPost} />
         {/* Неуправляемый/неконтролируемый компонент */}
         {/* <Input ref={bodyInputRef} type='text' placeholder='Описание поста' /> */}
         <ControlledInput />
         <Counter />
         {/* <ClassCounter /> */}
         <div className=''>
            <hr style={{ margin: '15px 0' }} />
            <h3>Поиск</h3>
            <Input
               value={searchQuery}
               type='text'
               onChange={(event) => setSearchQuery(event.target.value)}
               placeholder='Поиск...'
            />
            <h3>Сортировка</h3>
            <Select
               value={selectedSort}
               onChange={sortPosts}
               defaultValue='Сортировка по'
               options={[
                  { value: 'title', name: 'По названию' },
                  { value: 'body', name: 'По описанию' }
               ]}
            />
         </div>
         {/* Условная отрисовка с помощью тернарного оператора */}
         {posts.length !== 0 ? (
            <PostList
               remove={removePost}
               posts={sortedAndSearchedPosts}
               title='Посты про JS и TS'
            />
         ) : (
            <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
         )}
      </div>
   );
};

export default App;
