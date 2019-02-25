import React from 'react';
import { connect } from 'react-redux';
import {deleteAllProducts} from 'actions/productsAction';
import ProductsInfo from 'components/ProductsInfo';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        quantityProducts: state.products.allProducts.length,
        sumPriceProducts: state.products.sumPriceProducts,
        role: state.user.user.role,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        deleteAllProducts: function() {return dispatch(deleteAllProducts())},
    }
}

// {
//     "id": 1,
//     "autor": 1,
//     "name": "My product 1",
//     "image": "/img/product.jpg",
//     "description": "Small good",
//     "price": 500,
//     "currency": "$",
//     "date": "2019-02-22T15:44:02.101Z"
// },

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInfo);