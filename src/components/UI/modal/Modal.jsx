import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
   const rootClasses = [styles.modal];

   if (visible) {
      rootClasses.push(styles.active);
   }

   return (
      <div className={rootClasses.join(' ')}>
         <div className={styles.modal__content}>{children}</div>
      </div>
   );
};

export default Modal;
