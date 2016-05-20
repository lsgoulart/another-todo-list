import React, { Component } from 'react';

export default class TodoItem extends Component {
    _setPriority(taskId, priority) {

    }

    _removeTask(id) {

    }

    _toggleComplete(taskId) {

    }

    _getPriorityColorTriangle(priority) {
        let style = '';

        switch (priority) {
            case 0:
                style = 'transparent transparent transparent #81e808';
                break;
            case 1:
                style = 'transparent transparent transparent #ffa800';
                break
            case 3:
                style = 'transparent transparent transparent #eb3e3e';
                break
            default:
                style = 'transparent transparent transparent #eb3e3e';
        }

        return style;
    }

    _getPriority(priority) {
        switch (priority) {
            case 0:
                return 'Low';
                break;
            case 1:
                return 'Medium';
                break;
            case 2:
                return 'High';
                break;
            default:
                return 'Low';
        }
    }



    _getPriorityColor(priority, completed) {
        let style = '';

        switch (priority) {
            case 0:
                style = '#81e808';
                break;
            case 1:
                style = '#ffa800';
                break
            case 3:
                style = '#eb3e3e';
                break
            default:
                style = '#eb3e3e';
        }

        return style;
    }

    render() {
        const { todo } = this.props;

        return (
            <li className="todo">
                <div className="priority" onClick={ this._setPriority.bind(this, todo._id, todo.priority) } style={{ backgroundColor: this._getPriorityColor(todo.priority, todo.completed) }}>
                    <div className="tooltip" style={{ backgroundColor: this._getPriorityColor(todo.priority, todo.completed) }}>
                        { this._getPriority(todo.priority) } priority
                        <div className="triangle" style={{ borderColor: this._getPriorityColorTriangle(todo.priority) }}></div>
                    </div>
                </div>
                <div className="complete" onClick={this._toggleComplete.bind(this, todo._id)}>
                    <i className="fa fa-check" style={{ color: (todo.completed) ? '#81e808' : '#5a5a58' }}></i>
                </div>
                <span>{todo.text}</span>
                <div className="pull-right">
                    <div className="remove" onClick={this._removeTask.bind(this, todo._id)}>
                        <i className="fa fa-close"></i>
                    </div>
                </div>
            </li>
        )
    }
}
