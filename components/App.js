import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
require('./App.scss');

class App extends Component {
    render() {
        return (
            <div>
                <h1>Another TODO LIST ¬¬</h1>
                <TodoInput />
                <TodoList />
            </div>
        )
    }
}

export default App;
