import React from 'react';
import './styles/App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import About from './pages/About';

const App = () => {
   return (
      <div>
         <div className='navbar'>
            <div className='navbar__links'>
               <Link className='navbar__link' to='/posts' >Посты</Link>
               <Link className='navbar__link' to='/about' >О сайте</Link>
            </div>
         </div>
         <Routes>
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
         </Routes>
      </div>
   );
};

export default App;
