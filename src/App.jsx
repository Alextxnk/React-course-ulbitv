import React, { useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

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

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
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
