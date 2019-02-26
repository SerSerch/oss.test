import { createAction } from 'redux-actions';

export const getProductsAction = createAction('[Projects] getProductsAction');
export const deleteAllProductsAction = createAction('[Projects] deleteAllProductsAction');
export const deleteProductAction = createAction('[Projects] deleteProductAction');
export const createProductAction = createAction('[Projects] createProductAction');

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
        .then(function result(products) {
            products.map(i => {
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

export const deleteProduct = (id) => (dispatch) => {
    fetch('/api/products/'+id, {
        method: 'delete'
    })
        .then(function result() {
            dispatch(deleteProductAction(id))
        })
        .catch(function error(err) {
            dispatch(deleteProductAction( {error: err} ))
        });
};

export const createProduct = (data) => (dispatch) => {
    fetch('/api/products',{
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(function parse(res) {
            return res.json()
        })
        .then(function result(product) {
            dispatch(createProductAction(product))
        })
        .catch(err => {
            dispatch(createProductAction( {error: err} ))
        });
};