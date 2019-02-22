import { createAction } from 'redux-actions';

export const getAllProductsAction = createAction('[Projects] getAllProductsAction');

export const getAllProducts = (params=[]) => (dispatch) => {
    Promise.all([
        fetch('/api/users').then(res => res.json()),
        fetch('/api/products?'+params.join('&')).then(res => res.json())
    ])
        .then(products => {
            dispatch(getAllProductsAction(products))
        })
        .catch(err => {
            dispatch(getAllProductsAction( {error: err} ))
        });
};