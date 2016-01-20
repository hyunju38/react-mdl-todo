import React, { Component, PropTypes } from 'react';

class AddTodo extends Component {
    constructor (props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render () {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this.handleClick}> ADD </button>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddTodo;
