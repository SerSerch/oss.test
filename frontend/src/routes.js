import Hello from 'components/Hello';
import Home from 'layouts/Home';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/add-product',
        component: Hello,
        exact: true
    },
    {
        path: '*',
        component: Hello,
        exact: true
    },
]