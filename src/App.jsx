import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
// import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';

const App = () => {
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
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query); // использовали кастомный хук
   const [isPostsLoading, setIsPostsLoading] = useState(false);

   const fetchPosts = async () => {
      setIsPostsLoading(true);
      setTimeout(async () => {
         const posts = await PostService.getAll(); // обращаемся к методу класса из API
         setPosts(posts);
         setIsPostsLoading(false);
      }, 1000);
   };

   // один раз во время загрузки страницы отрендерятся посты
   useEffect(() => {
      fetchPosts();
   }, []);
   // массив зависимостей пустой, для того чтобы функция отработала один раз
   // при использовании зависимостей - будет вызываться при любом изменении, мы можем передавать сколько угодно зависимостей

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false); // закрываем модельное окно после добавления поста
   };

   const removePost = (post) => {
      setPosts(posts.filter((p) => p.id !== post.id));
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
         <PostFilter filter={filter} setFilter={setFilter} />
         <hr style={{ margin: '15px 0' }} />
         {isPostsLoading ? (
            <h1 style={{ textAlign: 'center' }}>Идет загрузка с сервера...</h1>
         ) : (
            <PostList
               remove={removePost}
               posts={sortedAndSearchedPosts}
               title='Посты'
            />
         )}
      </div>
   );
};

export default App;

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
