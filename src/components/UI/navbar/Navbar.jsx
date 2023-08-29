import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../button/Button';
import { AuthContext } from '../../../context';

const Navbar = () => {
   const { setIsAuth } = useContext(AuthContext);

   const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth');
   };

   return (
      <div className={styles.navbar}>
         <div className={styles.navbar__links}>
            <Link className={styles.navbar__link} to='/'>
               Главная
            </Link>
            <Link className={styles.navbar__link} to='/posts'>
               Посты
            </Link>
            <Link className={styles.navbar__link} to='/about'>
               О сайте
            </Link>
            <Button onClick={logout}>Выйти</Button>
         </div>
      </div>
   );
};

export default Navbar;
