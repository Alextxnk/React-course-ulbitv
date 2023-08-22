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

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');

   // с помощью хука useRef мы можем получать напрямую доступ к DOM-элементу
   // const bodyInputRef = useRef();

   const addNewPost = (event) => {
      event.preventDefault(); // чтоб не обновлялась страница после отправки формы
      // console.log(title); // получаем из useState
      // console.log(bodyInputRef.current.value); // получаем из useRef

      const newPost = {
         id: Date.now(),
         title,
         body
      };
      console.log(newPost);

      setPosts([...posts, newPost]);
   };

   return (
      <div className='App'>
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         <form>
            {/* Управляемые компоненты */}
            <Input
               value={title}
               type='text'
               placeholder='Название поста'
               onChange={(event) => setTitle(event.target.value)}
            />
            <Input
               value={body}
               type='text'
               placeholder='Описание поста'
               onChange={(event) => setBody(event.target.value)}
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
