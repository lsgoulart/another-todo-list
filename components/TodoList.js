import React, { Component } from 'react';
import TodoItem from './TodoItem';

require('./TodoList.scss');


class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list task-list">
            {
                this.props.todos.map( (todo) => <TodoItem key={ todo._id } todo={ todo } /> )
            }
            </ul>
        )
    }
}

export default TodoList;
