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
         <h1>Count: {count}</h1>
         <Button onClick={increment}>Increment</Button>
         <Button onClick={decrement}>Increment</Button>
      </div>
   );
};

export default Counter;
