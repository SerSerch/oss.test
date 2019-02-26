import React from 'react';
import { connect } from 'react-redux';
import {deleteAllProducts} from 'actions/productsAction';
import ProductsInfo from 'components/ProductsInfo';

const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        quantityProducts: state.products.allProducts.length,
        products: state.products.allProducts,
        role: state.user.user.role,
    }
};

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        deleteAllProducts: function() {return dispatch(deleteAllProducts())},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInfo);