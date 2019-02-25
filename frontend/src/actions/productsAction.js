import { createAction } from 'redux-actions';

export const getProductsAction = createAction('[Projects] getProductsAction');
export const deleteAllProductsAction = createAction('[Projects] deleteProductsAction');

export const getProducts = (params=[]) => (dispatch) => {
    fetch('/api/products?'+params.join('&'))
        .then(function parse(res) {
            return res.json()
        })
        .then(function result(products) {
            dispatch(getProductsAction(products))
        })
        .catch(function error(err) {
            dispatch(getProductsAction( {error: err} ))
        });
};

export const deleteAllProducts = () => (dispatch) => {
    //json-server API
    fetch('http://localhost:3000/products')
        .then(function parse(res) {
            return res.json()
        })
        .then(function get(products) {
            products.map(function del(i) {
                fetch('/api/products/'+i.id, {
                    method: 'delete'
                })
            })
        })
        .then(function result() {
            dispatch(deleteAllProductsAction({}))
        })
        .catch(function error(err) {
            dispatch(deleteAllProductsAction( {error: err} ))
        });
};