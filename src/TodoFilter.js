import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoFilter extends Component {
    render () {
        return (
            <div>
                <ul>
                    <li>All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>
            </div>
        );
    }
}

export default TodoFilter;
