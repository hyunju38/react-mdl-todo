import { configureStore } from './store/configureStore';
import { addTodo, completeTodo, setVisibilityFilter } from './actions/TodoActions';
import { VisibilityFilters } from './constants/common';

const store = configureStore();
console.log(store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('Hello, world!'));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETE));
unsubscribe();
