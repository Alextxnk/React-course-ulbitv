import React, { useState } from 'react';
import Input from './UI/input/Input';

const ControlledInput = () => {
   const [value, setValue] = useState('Text in input');

   return (
      <div>
         <h1>{value}</h1>
         <Input
            type='text'
            value={value}
            placeholder='Some text'
            /* двусторонее связывание - связывание состояния со значением, которое находится в инпуте
            подобные компоненты называются управляемыми, поскольку мы всегда можем изменит значение этого компонента, изменив состояние */
            onChange={(event) => setValue(event.target.value)}
         />
      </div>
   );
};

export default ControlledInput;
