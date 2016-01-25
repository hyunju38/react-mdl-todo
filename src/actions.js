import * as ActionTypes from './constants';

let addTodo = (title) => {
    return {
        type: ActionTypes.ADD_TODO,
        title
    };
};

let completeTodo = (id) => {
    return {
        type: ActionTypes.COMPLETE_TODO,
        id
    };
};

let deleteTodo = (id) => {
    return {
        type: ActionTypes.DELETE_TODO,
        id
    };
};

let setFilter = (filter) => {
    return {
        type: ActionTypes.SET_FILTER,
        filter
    };
};

export { addTodo, completeTodo, deleteTodo, setFilter };
