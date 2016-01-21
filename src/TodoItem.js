import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends Component {

    handleClick () {
        this.props.completeTodo(this.props.id);
    }

    removeTodo (event) {
        event.stopPropagation();
        this.props.removeTodo(this.props.id);
    }

    render () {
        return (
            <li className={this.props.completed ? 'is-completed ' : ''}>
                <span onClick={this.handleClick.bind(this)}>
                    {this.props.title}
                </span>
                <button className="mdl-button mdl-js-button mdl-button--icon"
                    onClick={this.removeTodo.bind(this)}>
                    <i className="material-icons">clear</i>
                </button>
            </li>
        );
    }
}

export default TodoItem;
