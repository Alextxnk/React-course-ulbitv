import React, { forwardRef } from 'react';
import styles from './Input.module.css';

// оборачиваем компонент в forwardRef
const Input = forwardRef((props, ref) => {
   return <input {...props} ref={ref} className={styles.Input} />;
});

export default Input;
