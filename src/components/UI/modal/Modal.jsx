import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ children, visible, setVisible }) => {
   const rootClasses = [styles.modal];

   if (visible) {
      rootClasses.push(styles.active);
   }

   return (
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
         {/* stopPropagation - чтобы при нажатии на область формы(контентной части) не закрывалось модальное окно */}
         <div className={styles.modal__content} onClick={((event) => event.stopPropagation())}>{children}</div>
      </div>
   );
};

export default Modal;
