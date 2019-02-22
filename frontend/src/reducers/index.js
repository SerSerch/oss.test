import { combineReducers } from 'redux';

import userReducer from './usersReduser';
import productsReducer from './productsReduser';

export default combineReducers({
    user: userReducer,
    products: productsReducer,
});