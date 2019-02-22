import { handleActions } from 'redux-actions';

import {
    getAllProductsAction
} from 'actions/productsAction';

const initialState = {
    allProducts: [],
    allUsers: [],
};

export default handleActions({

    [getAllProductsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                allProducts: action.payload[1],
                allUsers: action.payload[0]
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