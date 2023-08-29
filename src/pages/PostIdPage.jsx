import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
   const params = useParams();

   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);

   const [fetchPostById, isLoading, error] = useFetching(async (id) => {
      const response = await PostService.getById(id);
      setPost(response.data);
   });

   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
   });

   useEffect(() => {
      fetchPostById(params.id);
      fetchComments(params.id);
   }, []);

   return (
      <div className='container'>
         <h1 style={{ textAlign: 'center' }}>
            Страница поста с ID {params.id}
         </h1>
         <Link className='link' to='/posts'>
            <h3>К постам</h3>
         </Link>
         {isLoading ? (
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '18px'
               }}
            >
               <Loader />
            </div>
         ) : (
            <div className='post'>
               <div className='post__content'>
                  <strong>
                     {post.id}. {post.title}
                  </strong>
                  <div>{post.body}</div>
                  <div>
                     <h3>Комментарии</h3>
                     {isComLoading ? (
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '18px'
                           }}
                        >
                           <Loader />
                        </div>
                     ) : (
                        <div>
                           {comments.map((comment) => (
                              <div className='comment'>
                                 <h5>{comment.email}</h5>
                                 <div>{comment.body}</div>
                              </div>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default PostIdPage;
