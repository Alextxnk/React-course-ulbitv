import React from 'react';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ClassCounter from './components/ClassCounter';

const App = () => {
   return (
      <div>
         <ControlledInput />
         {/* мы можем создавать сколько угодно счетчиков и все они будут работать независимо друг от друга */}
         <Counter />
         <ClassCounter />
      </div>
   );
}

export default App;
