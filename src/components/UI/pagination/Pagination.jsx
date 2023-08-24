import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
   let pagesArray = getPagesArray(totalPages);

   return (
      <div className='page__wrapper'>
         {pagesArray.map((pageEl) => (
            <span
               onClick={() => changePage(pageEl)}
               key={pageEl.id}
               className={page === pageEl ? 'page page__current' : 'page'}
            >
               {pageEl}
            </span>
         ))}
      </div>
   );
};

export default Pagination;
