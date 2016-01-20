import * as types from '../constants/ActionTypes';

let addTodo = (text) => {
    return {
        type: types.ADD_TODO,
        text
    };
};

let completeTodo = (index) => {
    return {
        type: types.COMPLETE_TODO,
        index
    };
} ;

let setVisibilityFilter = (filter) => {
    return {
        type: types.SET_VISIBILITY_FILTER,
        filter
    };
};

export { addTodo, completeTodo, setVisibilityFilter };
