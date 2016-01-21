import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render () {
        let { completeTodo, removeTodo, selectedFilter } = this.props;
        let todos = this.props.todos.filter((todo, index) => {
            if (selectedFilter === 1 ) {
                return true && !todo.deleted;
            } else if (selectedFilter === 2) {
                return !todo.completed && !todo.deleted;
            } else if (selectedFilter === 3) {
                return todo.completed && !todo.deleted;
            } else if (selectedFilter === 4) {
                return todo.deleted;
            }
        });

        return (
            <div>
                <ul className="todo-list">
                    {todos.map((todo, index) =>
                        <TodoItem key={todo.id}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                            {...todo} />
                    )}
                </ul>
            </div>
        );
    }
}

export default TodoList;
