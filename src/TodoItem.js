import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const DISPLAY_NAME = 'TodoItem';

class TodoItem extends Component {

    constructor () {
        super();
        this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleCompleteTodo () {
        this.props.completeTodo(this.props.id);
    }

    handleRemoveTodo () {
        this.props.removeTodo(this.props.id);
    }

    render () {
        return (
            <li className={this.props.completed ? 'is_completed' : ''}>
                <span onClick={this.handleCompleteTodo}>
                    {this.props.title}
                </span>
                <button className="mdl-button mdl-js-button mdl-button--icon"
                    onClick={this.handleRemoveTodo}
                >
                    <i className="material-icons">{'clear'}</i>
                </button>
            </li>
        );
    }
}

TodoItem.displayName = DISPLAY_NAME;
TodoItem.propTypes = {
    completeTodo: React.PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    removeTodo: React.PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default TodoItem;
