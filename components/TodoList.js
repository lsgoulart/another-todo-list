import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        console.log(this);
        return (
            <ul className="todo-list">
            {
                this.props.todos.map((todo) => {
                    return <li key={todo.id}>{todo.text}</li>
                })
            }
            </ul>
        )
    }
}

export default TodoList;
