import React, { useContext } from 'react';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const { setIsAuth } = useContext(AuthContext);

   const navigate = useNavigate();

   const login = (event) => {
      event.preventDefault();
      setIsAuth(true);
      navigate('/posts');
   };

   return (
      <div className='container'>
         <h2>Страница входа</h2>
         <form onSubmit={login}>
            <Input type='text' placeholder='Введите логин' />
            <Input type='password' placeholder='Введите пароль' />
            <Button>Войти</Button>
         </form>
      </div>
   );
};

export default Login;
