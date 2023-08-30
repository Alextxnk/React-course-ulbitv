import React, { useEffect, useRef, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import Modal from '../components/UI/modal/Modal';
import PostForm from '../components/PostForm';
import ControlledInput from '../components/ControlledInput';
import Counter from '../components/Counter';
// import ClassCounter from './components/ClassCounter';
import Button from '../components/UI/button/Button';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/loader/Loader';
import PostList from '../components/PostList';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';
import Select from '../components/UI/select/Select';

const Posts = () => {
   /* const postsArr = [
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
   ]; */

   /* // с помощью хука useRef мы можем получать напрямую доступ к DOM-элементу
   * // const bodyInputRef = useRef();
   const addNewPost = (event) => {
      event.preventDefault(); // чтоб не обновлялась страница после отправки формы
      console.log(title); // получаем из useState
      console.log(bodyInputRef.current.value); // получаем из useRef
      setPosts([...posts, { ...post, id: Date.now() }]);
      setPost({ title: '', body: '' });
   }; */

   const [posts, setPosts] = useState([]);
   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [modal, setModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);

   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // использовали кастомный хук

   const lastElement = useRef();

   const [fetchPosts, isPostsLoading, postError] = useFetching(
      async (limit, page) => {
         const response = await PostService.getAll(limit, page); // обращаемся к методу класса из API
         // setPosts(response.data); // обычная подгрузка с пагинацией
         setPosts([...posts, ...response.data]);
         const totalCount = response.headers['x-total-count']; // 100
         setTotalPages(getPageCount(totalCount, limit));
      }
   );

   useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1);
   });

   /* useEffect(() => {
      if (isPostsLoading) return;
      if (observer.current) observer.current.disconnect();

      const callback = (entries) => {
         if (entries[0].isIntersecting && page < totalPages) {
            console.log('callback');
            setPage(page + 1);
         }
      };

      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current);
   }, [isPostsLoading]); */

   // один раз во время загрузки страницы отрендерятся посты
   useEffect(() => {
      fetchPosts(limit, page);
   }, [page, limit]); // [page]
   // массив зависимостей пустой, для того чтобы функция отработала один раз
   // при использовании зависимостей - будет вызываться при любом изменении, мы можем передавать сколько угодно зависимостей

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false); // закрываем модельное окно после добавления поста
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
   };

   const changePage = (page) => {
      setPage(page);
      // fetchPosts(limit, page);
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
            <Button onClick={() => setModal(true)}>Новый пост</Button>
            <Button onClick={fetchPosts}>GET Posts</Button>
         </div>
         {/* <Counter2 /> */}
         <hr style={{ margin: '15px 0' }} />
         <PostFilter
            filter={filter}
            setFilter={setFilter}
            limit={limit}
            setLimit={setLimit}
         />
         {/* <hr style={{ margin: '15px 0' }} /> */}
         {postError && <h1>Произошла ошибка: {postError}</h1>}
         {isPostsLoading && (
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '18px'
               }}
            >
               <Loader />
            </div>
         )}
         <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title='Посты'
         />
         <div ref={lastElement} style={{ height: 20, background: 'red' }} />
         <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
         />
      </div>
   );
};

export default Posts;

// const Counter2 = () => {
//    const [countObject, setCount] = useState({ count: 0 }); // в замыкании хранится дефолтное значение

//    const handleIncrement = () => {
//       если нужно предыдущее значение - используем callback
//       setCount(count => ++count);
//       setCount(count => ++count);
//    };

//    бесконечный цикл - вызовет ошибку, т.к. каждый раз создается новая ссылка объекта
//    useEffect(() => {
//       setCount({ ...countObject, count: countObject.count });
//    }, [countObject]); // [countObject.count] - обращаемся к примитиву, чтоб предотвратить ошибку

//    return (
//       <>
//          {countObject.count}
//          <button onClick={Function}>Increment</button>
//       </>
//    );
// }
