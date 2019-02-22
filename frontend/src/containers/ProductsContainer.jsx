import React from 'react';
import {connect} from 'react-redux';
import {getAllProducts} from 'actions/productsAction';
import Products from 'components/Products';


const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        products: state.products.allProducts,
        user: state.user.user,
    }
}

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        getAllProducts: function(params) {return dispatch(getAllProducts(params))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);