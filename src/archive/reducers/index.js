import { combineReducers } from 'redux';
import { todoAppState } from './todo';

const rootReducer = combineReducers({
    todoAppState
});

export { rootReducer };
