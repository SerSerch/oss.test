import { handleActions } from 'redux-actions';

import {
    getProductsAction,
    deleteAllProductsAction,
} from 'actions/productsAction';

const initialState = {
    allProducts: [],
    sumPriceProducts: 0,
    error: "",
};

export default handleActions({

    [getProductsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                allProducts: action.payload,
                sumPriceProducts: action.payload.map(i => i.price).reduce((accum, value) => accum + value),
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },

    [deleteAllProductsAction]: (state, action) => {
        let res = {};
        if (!action.payload.error) {
            res = {
                allProducts: [],
                sumPriceProducts: 0,
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