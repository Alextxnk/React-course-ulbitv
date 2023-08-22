import React, { useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import Button from './components/UI/button/Button';

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

   return (
      <div className='App'>
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         <form>
            <input type='text' placeholder='Название поста' />
            <input type='text' placeholder='Описание поста' />
            <Button disabled>Создать пост</Button>
         </form>
         <ControlledInput />
         <Counter />
         {/* <ClassCounter /> */}
         <PostList posts={posts} title='Посты про JS и TS' />
      </div>
   );
};

export default App;
