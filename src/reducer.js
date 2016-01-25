import * as ActionTypes from './constants';

const initialState = {
    filter: 1,
    todos: []
};

let todoApp = (state = initialState, action) => {
    let updatedTodos;
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            let todos = state.todos;
            let maxId = todos.reduce((prev, cur) => prev.id > cur.id ? prev.id : cur.id, 0);
            return Object.assign({}, state, {
                todos: todos.concat([
                    {
                        id: maxId + 1,
                        title: action.title,
                        completed: false,
                        deleted: false
                    }
                ])
            });
        case ActionTypes.COMPLETE_TODO:
            updatedTodos = state.todos.map((todo, index) => {
                if (todo.id === action.id) {
                    todo.completed = true;
                }
                return todo;
            });
            return Object.assign({}, state, {
                todos: updatedTodos
            });
        case ActionTypes.DELETE_TODO:
            updatedTodos = state.todos.map((todo, index) => {
                if (todo.id === action.id) {
                    todo.deleted = true;
                }
                return todo;
            });
            return Object.assign({}, state, {
                todos: updatedTodos
            });
        case ActionTypes.SET_FILTER:
            return Object.assign({}, state, {
                filter: action.filter
            });
        default:
            return state;
    }
};

export { todoApp };
