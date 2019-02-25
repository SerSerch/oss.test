import React from 'react';
import {connect} from 'react-redux';
import {
    getUser,
    userSignOut,
    userSignAuth,
} from 'actions/usersAction';
import {getProducts} from 'actions/productsAction';
import Navtop from 'components/Navtop';

    const userParams = [
        'login=serserch'
    ];

const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        isLogined: state.user.isLogined,
    }
};

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        userSignAuth: function() {return dispatch(userSignAuth())},
        userSignIn: function () {return dispatch(getUser(userParams))},
        userSignOut: function() {return dispatch(userSignOut())},
        getAllProducts: function() {return dispatch(getProducts())},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navtop);