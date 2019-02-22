import React from 'react';
import {connect} from 'react-redux';
import {userSigningAuth} from 'actions/users';
import Navtop from 'components/Navtop';

const mapStateToProps = function(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        isLogined: state.user.isLogined,
        userId: state.user.userId,
    }
};

const mapDispatchToProps = function(dispatch, props) {
    return {
        ...props,
        userSigningAuth: function(data) {return dispatch(userSigningAuth(data))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navtop);