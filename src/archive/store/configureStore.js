import { createStore } from 'redux';
import { rootReducer } from '../reducers/index';

let configureStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

export { configureStore };
