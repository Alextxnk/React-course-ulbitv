import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/posts' element={<Posts />} />
         <Route path='/posts/:id' element={<PostIdPage />} />
         <Route path='/about' element={<About />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
}

export default AppRouter;
