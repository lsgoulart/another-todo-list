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

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.addTodo(this.state.inputText));
        this.setState({ inputText: '' });
    }

    render() {
        return (
            <div className="todo-input">
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <input type="text" value={ this.state.inputText } onChange={this.handleChange.bind(this)} placeholder="Add TODO here..." />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoInput;
