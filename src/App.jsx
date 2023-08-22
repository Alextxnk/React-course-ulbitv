import React, { useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Select from './components/UI/select/Select';

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

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
   };

   const sortPosts = (sort) => {
      setSelectedSort(sort);
      // console.log(sort); // title | body
      // т.к. функция sort не возвращает новый отсортированный массив, а мутирует тот массив, к которому эта функция была применена
      // и состояние напрямую изменять нельзя, мы заспредим посты в новый массив и уже к нему применим функцию сортировки
      // localeCompare - эта функция предназначена для сравнения строк и чаще всего используется при сортировке
      setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
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
            <h3>Фильтр</h3>
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
               posts={posts}
               title='Посты про JS и TS'
            />
         ) : (
            <h2 style={{ textAlign: 'center' }}>Посты не найдены</h2>
         )}
      </div>
   );
};

export default App;
