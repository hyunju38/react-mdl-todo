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

        if (this.state.inputText.trim().length <= 0) {
            return;
        }

        let todos = this.state.todos;
        let maxId = todos.reduce((previousValue, currentValue, currentIndex, array) => {
            return previousValue.id > currentValue.id ? previousValue.id : currentValue.id;
        }, 0);
        this.setState({
            inputText: '',
            todos: todos.concat([
                {
                    id: maxId + 1,
                    title: this.state.inputText,
                    completed: false,
                    deleted: false
                }
            ])
        });
    }

    changeInputText (inputText) {
        this.setState({
            inputText: inputText
        });
    }

    completeTodo (id) {
        // console.log(id);
        let newTodos = this.state.todos.map((value, index) => {
            if (value.id === id) {
                value.completed = true;
            }
            return value;
        });
        this.setState({
            todos: newTodos
        });
    }

    removeTodo (id) {
        let newTodos = this.state.todos.map((value, index) => {
            if (value.id === id) {
                value.deleted = true;
            }
            return value;
        });
        this.setState({
            todos: newTodos
        });
    }

    applyFilter (selectedFilterId) {
        this.setState({
            filter: selectedFilterId
        });
    }

    render () {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone"></div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
                    <TodoInput
                        inputText={this.state.inputText}
                        addTodo={this.addTodo.bind(this)}
                        changeInputText={this.changeInputText.bind(this)} />
                    <TodoList
                        todos={this.state.todos}
                        completeTodo={this.completeTodo.bind(this)}
                        removeTodo={this.removeTodo.bind(this)}
                        selectedFilter={this.state.filter} />
                    <TodoFilter
                        applyFilter={this.applyFilter.bind(this)}
                        selectedFilter={this.state.filter} />
                </div>
                <div className="mdl-cell mdl-cell--4-col mdl-cell--2-col-tablet mdl-cell--1-col-phone"></div>
            </div>
        );
    }
}

export default TodoApp;
