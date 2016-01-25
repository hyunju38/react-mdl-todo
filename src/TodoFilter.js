import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FILTERS } from './constants';

import './TodoFilter.scss';

const DISPLAY_NAME = 'TodoFilter';

class TodoFilter extends Component {

    constructor () {
        super();
        this.handleApplyFilter = this.handleApplyFilter.bind(this);
    }

    handleApplyFilter (event) {
        event.preventDefault();
        this.props.applyFilter(parseInt(event.target.dataset.filterId));
    }

    render () {
        let { filters, selectedFilter } = this.props;
        return (
            <ul className="filter">
                {filters.map((filter, index) =>
                    <li key={filter.id}>
                        <span className={selectedFilter === filter.id ? "is_active" : ""}
                            data-filter-id={filter.id}
                            onClick={this.handleApplyFilter}
                        >
                            {filter.text}
                        </span>
                    </li>
                )}
            </ul>
        );
    }
}

TodoFilter.displayName = DISPLAY_NAME;
TodoFilter.propTypes = {
    applyFilter: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    selectedFilter: PropTypes.number.isRequired
};
TodoFilter.defaultProps = {
    // filter tab은 state 보다 TodoFilter에만 필요한 props 이므로 defaultProps로 선언
    filters: Object.keys(FILTERS).map(function(filter, index){
        return {
            id: FILTERS[filter],
            text: filter
        };
    })
};

export default TodoFilter;
