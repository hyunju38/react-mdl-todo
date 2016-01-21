import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends Component {

    handleSubmit () {
        this.props.addTodo();
    }

    handleChange () {
        this.props.changeInputText(this.refs.inputText.value);
    }

    handleKeyDown (e) {
        // console.log(e);
        if (e.keyCode !== 13) {
            return;
        }
        this.handleSubmit();
    }

    render () {
        return (
            <div>
                <div className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input"
                        type="text"
                        id="todo-text"
                        value={this.props.inputText}
                        onChange={this.handleChange.bind(this)}
                        onKeyDown={this.handleKeyDown.bind(this)}
                        ref="inputText" />
                    <label className="mdl-textfield__label" htmlFor="todo-text">Input your Todo</label>
                    <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored mdl-button--mini-fab"
                        style={{right: -15, top: 15}}
                        onClick={this.handleSubmit.bind(this)} >
                        <i className="material-icons">add</i>
                    </button>
                </div>
            </div>
        );
    }
}

TodoInput.propTypes = {
    inputText: React.PropTypes.string.isRequired,
    addTodo: React.PropTypes.func.isRequired,
    changeInputText: React.PropTypes.func.isRequired
};

export default TodoInput;
