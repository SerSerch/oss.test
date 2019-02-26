import { handleActions } from 'redux-actions';

import {
    getUserAction,
    createUserAction,
    updateUserAction,
    userSignOutAction,
    userSignAuthAction
} from 'actions/usersAction';

const initialState = {
    isLogined: false,
    user: {},
    role: '',
    error: '',
};

const getRole = function(user) {
    let role = '';
    switch (user && user.role) {
        case (1):
            role = 'admin';
            break;
        default:
            role = 'user';
    }
    return role;
};

export default handleActions({
    [getUserAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload[0].hasOwnProperty('login')) {
            localStorage.user = JSON.stringify(action.payload[0]);
            res = {
                isLogined: true,
                user: action.payload[0],
                role: getRole(action.payload[0]),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [createUserAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('login')) {
            localStorage.user = JSON.stringify(action.payload);
            res = {
                isLogined: true,
                user: action.payload,
                role: getRole(action.payload),
            };
        } else {
            res = {
                ...state,
                errors: action.payload.error,
            };
        }
        return res;
    },
    [updateUserAction]: (state, action) => {
        let res = {};
        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('login')) {
            localStorage.user = JSON.stringify(action.payload);
            res = {
                user: action.payload,
                role: getRole(action.payload),
            };
        } else {
            res = {
                ...state,
                errors: action.payload.error,
            };
        }
        return res;
    },
    [userSignOutAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error')) {
            if (localStorage.user) {
                delete localStorage.user;
            }
            res = {
                isLogined: false,
                user: {},
                role: getRole(),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignAuthAction]: (state, action) => {
        let res = {};
        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('login')) {
            res = {
                isLogined: true,
                user: action.payload,
                role: getRole(action.payload),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
}, initialState);