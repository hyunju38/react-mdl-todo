import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { addTodo, completeTodo, deleteTodo, setFilter } from './actions';
import { FILTERS } from './constants';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const DISPLAY_NAME = 'TodoApp';

class TodoApp extends Component {

    constructor () {
        super();

        this.dispatchAddTodo = this.dispatchAddTodo.bind(this);
        this.dispatchCompleteTodo = this.dispatchCompleteTodo.bind(this);
        this.dispatchDeleteTodo = this.dispatchDeleteTodo.bind(this);
        this.dispatchSetFilter = this.dispatchSetFilter.bind(this);
    }

    dispatchAddTodo (title) {
        return this.props.dispatch(addTodo(title));
    }

    dispatchCompleteTodo (id) {
        return this.props.dispatch(completeTodo(id));
    }

    dispatchDeleteTodo (id) {
        return this.props.dispatch(deleteTodo(id));
    }

    dispatchSetFilter (filter) {
        return this.props.dispatch(setFilter(filter));
    }

    render () {
        const { dispatch, filter, todos } = this.props;
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone"></div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
                    <TodoInput addTodo={this.dispatchAddTodo} />
                    <TodoList completeTodo={this.dispatchCompleteTodo}
                        removeTodo={this.dispatchDeleteTodo}
                        selectedFilter={filter}
                        todos={todos}
                    />
                    <TodoFilter applyFilter={this.dispatchSetFilter}
                        selectedFilter={filter}
                    />
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone"></div>
            </div>
        );
    }
}

TodoApp.displayName = DISPLAY_NAME;
TodoApp.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    filter: PropTypes.number.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

function select (state) {
    return {
        filter: state.filter,
        // todo list의 filtering logic을 여기서 처리
        todos: state.todos.filter((todo, index) => {
            switch (state.filter) {
                case FILTERS.ALL:
                    return true && !todo.deleted;
                case FILTERS.TODO:
                    return !todo.completed && !todo.deleted;
                case FILTERS.COMPLETE:
                    return todo.completed && !todo.deleted;
                case FILTERS.ARCHIVE:
                    return todo.deleted;
                default:
                    return todo;
            }
        })
    };
}

export default connect(select)(TodoApp);
