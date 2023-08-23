import React, { useState } from 'react';
import Button from './UI/button/Button';

const Counter = () => {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   const decrement = () => {
      setCount(count - 1);
   };

   return (
      <div>
         <h2>Count: {count}</h2>
         <Button onClick={increment}>Increment</Button>
         <Button onClick={decrement}>Decrement</Button>
      </div>
   );
};

export default Counter;
