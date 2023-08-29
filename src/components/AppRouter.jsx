import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import Layout from './Layout';
import { AuthContext } from '../context';
// import { publicRoutes } from '../router';

const AppRouter = () => {
   const { isAuth } = useContext(AuthContext);

   return (
      <Routes>
         {isAuth ? (
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<Home />} />
               <Route path='/posts' element={<Posts />} />
               <Route path='/posts/:id' element={<PostIdPage />} />
               <Route path='/about' element={<About />} />
               <Route path='/not-found' element={<NotFound />} />
               <Route
                  path='*'
                  index
                  element={<Navigate replace to='/not-found' />}
               />
            </Route>
         ) : (
            <>
               <Route path='/login' element={<Login />} />
               <Route
                  path='*'
                  index
                  element={<Navigate replace to='/login' />}
               />
               {/* {publicRoutes.map((route) => (
                  <Route path={route.path} element={route.component} />
               ))} */}
            </>
         )}
      </Routes>
   );
};

export default AppRouter;
