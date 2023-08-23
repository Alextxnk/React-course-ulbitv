import React, { useState } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const PostForm = ({ create }) => {
   const [post, setPost] = useState({ title: '', body: '' });

   const addNewPost = (event) => {
      event.preventDefault(); // чтоб не обновлялась страница после отправки формы
      const newPost = {
         ...post,
         id: Date.now()
      };
      create(newPost);
      setPost({ title: '', body: '' });
   };

   return (
      <>
         <h2>Создание поста</h2>
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
            <Button onClick={addNewPost}>Создать пост</Button>
         </form>
      </>
   );
};

export default PostForm;
