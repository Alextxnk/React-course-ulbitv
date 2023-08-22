import React, { useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import Button from './components/UI/button/Button';
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

   const [post, setPost] = useState({ title: '', body: '' });

   // с помощью хука useRef мы можем получать напрямую доступ к DOM-элементу
   // const bodyInputRef = useRef();

   const addNewPost = (event) => {
      event.preventDefault(); // чтоб не обновлялась страница после отправки формы
      // console.log(title); // получаем из useState
      // console.log(bodyInputRef.current.value); // получаем из useRef

      setPosts([...posts, { ...post, id: Date.now() }]);
      setPost({ title: '', body: '' });
   };

   return (
      <div className='App'>
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         <form>
            {/* Управляемые компоненты */}
            <Input
               value={post.title}
               type='text'
               placeholder='Название поста'
               onChange={(event) =>
                  setPost({ ...post, title: event.target.value })
               }
            />
            <Input
               value={post.body}
               type='text'
               placeholder='Описание поста'
               onChange={(event) =>
                  setPost({ ...post, body: event.target.value })
               }
            />
            {/* Неуправляемый/неконтролируемый компонент */}
            {/* <Input
               ref={bodyInputRef}
               type='text'
               placeholder='Описание поста'
            /> */}
            <Button onClick={addNewPost}>Создать пост</Button>
         </form>
         <ControlledInput />
         <Counter />
         {/* <ClassCounter /> */}
         <PostList posts={posts} title='Посты про JS и TS' />
      </div>
   );
};

export default App;
