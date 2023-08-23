import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter }) => {
   return (
      <div>
         <h3>Поиск</h3>
         <Input
            value={filter.query}
            type='text'
            onChange={(event) =>
               setFilter({ ...filter, query: event.target.value })
            }
            placeholder='Поиск...'
         />
         <h3>Сортировка</h3>
         <Select
            value={filter.sort}
            onChange={(selectedSort) =>
               setFilter({ ...filter, sort: selectedSort })
            }
            defaultValue='Сортировка по'
            options={[
               { value: 'title', name: 'По названию' },
               { value: 'body', name: 'По описанию' }
            ]}
         />
      </div>
   );
};

export default PostFilter;
