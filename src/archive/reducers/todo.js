import { VisibilityFilters } from '../constants/common';
import * as types from '../constants/ActionTypes';

const initialState = {
    visibilityFilters: VisibilityFilters.SHOW_ALL,
    todos: []
};

let todoAppState = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                        ...state.todos,
                        {
                            text: action.text,
                            complete: false
                        }
                    ]
            });
        case types.COMPLETE_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, action.index),
                    Object.assign({}, state.todos[action.index], {
                        complete: true
                    }),
                    ...state.todos.slice(action.index + 1)
                ]
            });
        case types.SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilters: action.filter
            });
        default:
            return state;
    }
};

export { todoAppState };
