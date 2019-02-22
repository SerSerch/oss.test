import { createAction } from 'redux-actions';

export const getUserAction = createAction('[User] getUserAction');
export const createUserAction = createAction('[User] createUserAction');
export const updateUserAction = createAction('[User] updateUserAction');
export const userSignOutAction = createAction('[User] userSignOutAction');
export const userSignAuthAction = createAction('[User] userSignAuthAction');

export const getUser = (params) => (dispatch) => {
    fetch('/api/users?'+params.join('&'))
        .then(res => res.json())
        .then(user => {
            dispatch(getUserAction(user));
        }).catch(err => {
        dispatch(getUserAction( {error: err} ))
    });
};

export const createUser = (data) => (dispatch) => {
    fetch('/api/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(user => {
            dispatch(createUserAction(user));
        }).catch(err => {
        dispatch(createUserAction( {error: err} ))
    });
};

export const updateUser = (id, data) => (dispatch) => {
    fetch('/api/users/'+id, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(user => {
            dispatch(updateUserAction(user));
        }).catch(err => {
        dispatch(updateUserAction( {error: err} ))
    });
};

export const userSignOut = () => (dispatch) => {
    dispatch(userSignOutAction({}));
};

export const userSignAuth = () => (dispatch) => {
    if (localStorage.user) {
        const userStorage = JSON.parse(localStorage.user);
        if (userStorage.hasOwnProperty('login')) {
            dispatch(userSignAuthAction(userStorage));
        }
    }
};