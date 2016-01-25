import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

import './TodoList.scss';

const DISPLAY_NAME = 'TodoList';

class TodoList extends Component {

    render () {
        let { completeTodo, removeTodo, todos } = this.props;
        return (
            <div className="todo_list">
                <ul>
                    {todos.map((todo, index) =>
                        <TodoItem completeTodo={completeTodo}
                            key={todo.id}
                            removeTodo={removeTodo}
                            {...todo}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

TodoList.displayName = DISPLAY_NAME;
TodoList.propTypes = {
    completeTodo: React.PropTypes.func.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

export default TodoList;
