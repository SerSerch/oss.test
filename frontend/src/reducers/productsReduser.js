import { handleActions } from 'redux-actions';

import {
    getProductsAction,
    deleteAllProductsAction,
    deleteProductAction,
    createProductAction,
} from 'actions/productsAction';

const initialState = {
    allProducts: [],
    error: "",
};

export default handleActions({

    [getProductsAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && Array.isArray(action.payload)) {
            res = {
                allProducts: action.payload,
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
    [deleteProductAction]: (state, action) => {
        let res = {};

        if (!action.payload.error) {
            res = {
                allProducts: [...state.allProducts].filter(item => item.id != action.payload)
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [createProductAction]: (state, action) => {
        let res = {};

        if (!action.payload.error && action.payload.id) {
            res = {
                allProducts: state.allProducts.concat(action.payload),
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