import React from 'react';
import './styles/App.css';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';

const App = () => {
   return (
      <div>
         <Navbar />
         <AppRouter />
      </div>
   );
};

export default App;
