import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({ filter, setFilter, limit, setLimit }) => {
   return (
      <div>
         <h3>Поиск по заголовкам</h3>
         <Input
            value={filter.query}
            type='text'
            onChange={(event) =>
               setFilter({ ...filter, query: event.target.value })
            }
            placeholder='Поиск...'
         />
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
               <h3>Отсортировать</h3>
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
            <div>
               <h3>Кол-во постов на странице</h3>
               <Select
                  value={limit}
                  onChange={(value) => setLimit(value)}
                  defaultValue='Кол-во постов'
                  options={[
                     { value: 5, name: '5' },
                     { value: 10, name: '10' },
                     { value: 25, name: '25' },
                     { value: -1, name: 'Все посты' }
                  ]}
               />
            </div>
         </div>
      </div>
   );
};

export default PostFilter;
