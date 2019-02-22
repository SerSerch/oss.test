import { createStore, applyMiddleware} from 'redux';
import rootReduser from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
    rootReduser,
    applyMiddleware(thunk),
);