import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends Component {

    handleSubmit () {
        this.props.addTodo();
    }

    handleChange () {
        this.props.changeInputText(this.refs.inputText.value);
    }

    render () {
        return (
            <div>
                <button onClick={this.handleSubmit.bind(this)}>↓</button>
                <input type="text"
                    value={this.props.inputText}
                    onChange={this.handleChange.bind(this)}
                    ref="inputText"
                />
            </div>
        );
    }
}

export default TodoInput;
