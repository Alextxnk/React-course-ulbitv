import { useMemo } from 'react';

// кастомные пользовательские хуки - это хуки, которые внутри себя используют стандартные react хуки
export const useSortedPosts = (posts, sort) => {
   const sortedPosts = useMemo(() => {
      // console.log('useMemo'); // вызывается в начале и потом ждет, когда потребуется сортировка
      // т.к. функция sort не возвращает новый отсортированный массив, а мутирует тот массив, к которому эта функция была применена,
      // и состояние напрямую изменять нельзя, мы заспредим посты в новый массив и уже к нему применим функцию сортировки
      // тоесть в данном случае мы мутируем копию массива и не мутируем состояние напрямую
      // localeCompare - эта функция предназначена для сравнения строк и чаще всего используется при сортировке
      if (sort) {
         return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      }

      return posts;
   }, [sort, posts]);

   return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
   const sortedPosts = useSortedPosts(posts, sort);

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) =>
         post.title.toLowerCase().includes(query.toLowerCase())
      );
   }, [query, sortedPosts]);

   return sortedAndSearchedPosts;
};
