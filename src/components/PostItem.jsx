import React from 'react';
import Button from './UI/button/Button';

const PostItem = (props) => {
   // console.log('🚀 ~ file: PostItem.jsx:4 ~ PostItem ~ props:', props);

   return (
      <div className='post'>
         <div className='post__content'>
            <strong>
               {props.number}. {props.post.title}
            </strong>
            <div>{props.post.body}</div>
         </div>
         <div className='post__btns'>
            <Button>Удалить</Button>
         </div>
      </div>
   );
};

export default PostItem;
