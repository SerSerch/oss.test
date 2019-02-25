import { createAction } from 'redux-actions';

export const getAllProductsAction = createAction('[Projects] getAllProductsAction');

export const getAllProducts = (params=[]) => (dispatch) => {
        fetch('/api/products?'+params.join('&')).then(res => res.json())
        .then(products => {
            dispatch(getAllProductsAction(products))
        })
        .catch(err => {
            dispatch(getAllProductsAction( {error: err} ))
        });
};