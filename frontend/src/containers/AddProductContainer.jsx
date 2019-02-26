import React from 'react';
import { connect } from 'react-redux';
import {createProduct} from 'actions/productsAction';
import AddProduct from 'components/AddProduct';


const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        isLogined: state.user.isLogined,
    }
};

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        createProduct: (data) => dispatch(createProduct(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);