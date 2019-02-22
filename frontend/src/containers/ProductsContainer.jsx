import React from 'react';
import { connect } from 'react-redux';
import {
    getAllProducts,
} from 'actions/productsAction';
import Products from 'components/Products';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        products: state.products.allProducts,
        user: state.user.user,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        getAllProducts: (params) => dispatch(getAllProducts(params)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);