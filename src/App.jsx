import React, { useMemo, useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';

const App = () => {
   const [posts, setPosts] = useState([
      {
         id: 1,
         title: 'JavaScript',
         body: 'Desc'
      },
      {
         id: 2,
         title: 'TypeScript',
         body: 'Description'
      },
      {
         id: 3,
         title: 'Python',
         body: 'Py Description'
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

   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [modal, setModal] = useState(false);

   const sortedPosts = useMemo(() => {
      // console.log('useMemo'); // вызывается в начале и потом ждет, когда потребуется сортировка
      // т.к. функция sort не возвращает новый отсортированный массив, а мутирует тот массив, к которому эта функция была применена,
      // и состояние напрямую изменять нельзя, мы заспредим посты в новый массив и уже к нему применим функцию сортировки
      // тоесть в данном случае мы мутируем копию массива и не мутируем состояние напрямую
      // localeCompare - эта функция предназначена для сравнения строк и чаще всего используется при сортировке
      if (filter.sort) {
         return [...posts].sort((a, b) =>
            a[filter.sort].localeCompare(b[filter.sort])
         );
      }

      return posts;
   }, [filter.sort, posts]);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) =>
         post.title.toLowerCase().includes(filter.query.toLowerCase())
      );
   }, [filter.query, sortedPosts]);

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
   };

   const openModal = () => {
      setModal(true);
   };

   return (
      <div className='app'>
         <Modal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </Modal>
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         {/* Неуправляемый/неконтролируемый компонент */}
         {/* <Input ref={bodyInputRef} type='text' placeholder='Описание поста' /> */}
         <ControlledInput />
         <Counter />
         {/* <ClassCounter /> */}
         <div className='create__btn'>
            <Button onClick={openModal}>Новый пост</Button>
         </div>
         <hr style={{ margin: '15px 0' }} />
         <PostFilter filter={filter} setFilter={setFilter} />
         <hr style={{ margin: '15px 0' }} />
         <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title='Посты про JS и TS'
         />
      </div>
   );
};

export default App;
