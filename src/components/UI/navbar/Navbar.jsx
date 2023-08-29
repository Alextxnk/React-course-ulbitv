import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
   return (
      <div className={styles.navbar}>
         <div className={styles.navbar__links}>
         <Link className={styles.navbar__link} to='/' >Главная</Link>
            <Link className={styles.navbar__link} to='/posts' >Посты</Link>
            <Link className={styles.navbar__link} to='/about' >О сайте</Link>
         </div>
      </div>
   );
}

export default Navbar;
