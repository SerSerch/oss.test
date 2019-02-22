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
};

export default handleActions({
    [getUserAction]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload[0].hasOwnProperty('login')) {
            localStorage.user = JSON.stringify(action.payload[0]);
            res = {
                isLogined: true,
                user: action.payload[0],
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