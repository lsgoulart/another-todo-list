import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
require('./App.scss');

class App extends Component {
    render() {
        return (
            <div>
                <h1>Another TODO LIST ¬¬</h1>
                <TodoInput dispatch={this.props.dispatch} />
                <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(App);
