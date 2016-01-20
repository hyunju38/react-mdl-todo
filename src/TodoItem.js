import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component {
    render () {
        return (
            <li style={{
                textDecoration: this.props.completed ? 'line-through' : 'none'
            }}>
                {this.props.title}
            </li>
        );
    }
}

export default TodoItem;
