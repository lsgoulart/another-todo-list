import React, { Component } from 'react';
require('./TodoInput.scss');

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        return (
            <div className="todo-input">
                <input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)} placeholder="Add TODO here..." />
                <button>Submit</button>
            </div>
        )
    }
}

export default TodoInput;
