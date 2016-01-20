import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class TodoApp extends Component {

    constructor (props) {
        super(props);

        this.state = {
            inputText: '',
            filter: 1,
            todos: []
        };
    }

    addTodo () {
        let todos = this.state.todos;
        let maxId = todos.reduce((previousValue, currentValue, currentIndex, array) => {
            return previousValue.id > currentValue.id ? previousValue.id : currentValue.id;
        }, 1);
        this.setState({
            inputText: '',
            todos: todos.concat([
                {
                    id: maxId + 1,
                    title: this.state.inputText,
                    completed: false
                }
            ])
        });


    }

    changeInputText (inputText) {
        this.setState({
            inputText: inputText
        });
    }

    render () {
        return (
            <div>
                <TodoInput
                    inputText={this.state.inputText}
                    addTodo={this.addTodo.bind(this)}
                    changeInputText={this.changeInputText.bind(this)}
                />
                <TodoList todos={this.state.todos} />
                <TodoFilter filter={this.state.filter} />
            </div>
        );
    }
}

export default TodoApp;
