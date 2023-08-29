import React, { useEffect, useState } from 'react';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
   const [isAuth, setIsAuth] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      if (localStorage.getItem('auth')) {
         setIsAuth(true);
      }

      setIsLoading(false);
   }, []);

   return (
      <AuthContext.Provider
         value={{
            isAuth,
            setIsAuth,
            isLoading
         }}
      >
         <BrowserRouter>
            <AppRouter />
         </BrowserRouter>
      </AuthContext.Provider>
   );
};

export default App;
