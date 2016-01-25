import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './TodoInput.scss';

const DISPLAY_NAME = 'TodoInput';

class TodoInput extends Component {

    constructor () {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleInputRef = this.handleInputRef.bind(this);
    }

    handleAddTodo () {
        // todo text 입력 유효성 검증
        if (!this.inputText || !this.inputText.value) {
            return;
        }
        let inputTextValue = this.inputText.value;
        if (inputTextValue.trim() === '') {
            return;
        }
        this.props.addTodo(inputTextValue);
        this.inputText.value = '';
    }

    handleSubmit (event) {
        // enter key에 submit 적용
        if (event.keyCode !== 13) {
            return;
        }
        this.handleAddTodo();
    }

    handleInputRef (element) {
        return this.inputText = element;
    }

    render () {
        return (
            <div className="todo_input">
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input"
                        id="todo-text"
                        onKeyDown={this.handleSubmit}
                        ref={this.handleInputRef}
                        type="text"
                    />
                    <label className="mdl-textfield__label"
                        htmlFor="todo-text"
                    >
                        {'Input your Todo'}
                    </label>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab"
                        onClick={this.handleAddTodo}
                    >
                        <i className="material-icons">{'add'}</i>
                    </button>
                </div>
            </div>
        );
    }
}

TodoInput.displayName = DISPLAY_NAME;
TodoInput.propTypes = {
    addTodo: React.PropTypes.func.isRequired
};

export default TodoInput;
