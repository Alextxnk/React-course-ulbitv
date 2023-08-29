import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
   { path: '/', component: Home },
   { path: '/posts', component: Posts },
   { path: '/posts/:id', component: PostIdPage },
   { path: '/about', component: About },
   { path: '*', component: NotFound }
];

export const publicRoutes = [{ path: '/login', component: Login }];
