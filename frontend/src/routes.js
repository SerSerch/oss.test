import Hello from 'components/Hello';
import Home from 'layouts/Home';
import AddProduct from 'layouts/AddProduct';

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/add-product',
        component: AddProduct,
        exact: true
    },
    {
        path: '*',
        component: Hello,
        exact: true
    },
]