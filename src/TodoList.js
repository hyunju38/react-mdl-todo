import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render () {
        return (
            <div>
                <ul>
                    {this.props.todos.map((todo, index) =>
                        <TodoItem key={todo.id} {...todo} />
                    )}
                </ul>
            </div>
        );
    }
}

export default TodoList;
