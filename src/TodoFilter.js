import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TodoFilter extends Component {

    applyFilter (event) {
        event.preventDefault();
        this.props.applyFilter(parseInt(event.target.dataset.filterId));
    }

    render () {
        return (
            <ul className="filter">
                {this.props.filters.map((filter, index) =>
                    <li key={filter.id}>
                        <span className={this.props.selectedFilter === filter.id ? "is-active" : ""}
                            onClick={this.applyFilter.bind(this)}
                            data-filter-id={filter.id}>
                            {filter.text}
                        </span>
                    </li>
                )}
            </ul>
        );
    }
}

TodoFilter.defaultProps = {
    filters: [
        {
            id: 1,
            text: 'ALL'
        },
        {
            id: 2,
            text: 'TODO'
        },
        {
            id: 3,
            text: 'COMPLETE'
        },
        {
            id: 4,
            text: 'ARCHIVE'
        }
    ]
};

export default TodoFilter;
