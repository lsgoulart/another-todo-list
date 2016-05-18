import React, { Component } from 'react';
import actions from '../redux/actions';

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

    handleSubmit() {
        event.preventDefault();
        this.props.dispatch(actions.addTodo(this.state.inputText));
    }

    render() {
        return (
            <div className="todo-input">
                <input type="text" value={ this.state.inputText } onChange={this.handleChange.bind(this)} placeholder="Add TODO here..." />
                <button onClick={ this.handleSubmit.bind(this) }>Submit</button>
            </div>
        )
    }
}

export default TodoInput;
