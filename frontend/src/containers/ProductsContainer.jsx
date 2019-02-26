import React from 'react';
import {connect} from 'react-redux';
import Products from 'components/Products';

import {deleteProduct} from 'actions/productsAction';

const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        products: state.products.allProducts,
        role: state.user.user.role,
        error: state.products.error,
    }
};

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        deleteProduct: function(id) {return dispatch(deleteProduct(id))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);