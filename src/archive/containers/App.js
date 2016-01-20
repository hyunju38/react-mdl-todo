import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class App extends Component {
    render () {
        const {  } = this.props;

        return (
            <TodoApp
        );
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibleFilters: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETE',
        'SHOW_ACTIVE'
    ]).isRequired
};

let mapStateToProps = (state) => {
    return {
        todoAppState: state.todoAppState
    };
};

export default connect(mapStateToProps)(App);
