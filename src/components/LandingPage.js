import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { ToDo } from './ToDo';
import selectTodos from './../selectors/todos';


const LandingPage = (props) => {
    return (
        <div className="container">
            <h1>TODO List</h1>
            <ToDo todos={props.todos}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        todos: selectTodos(state.todos, state.filters)
    }
};

export default connect(mapStateToProps)(LandingPage);
