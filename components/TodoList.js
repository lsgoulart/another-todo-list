import React, { Component } from 'react';

require('./TodoList.scss');


class TodoList extends Component {

    _setPriority(taskId, priority) {
       const {set_priority} = this.props;
       if(priority < 2) priority++;
       else priority = 0;

       set_priority(taskId, priority);
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
               break
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
               break;
       }
   }

   _removeTask(id) {
       const {remove} = this.props;
       remove(id);
   }

   _toggleComplete(taskId) {
       const {set_completed} = this.props;
       set_completed(taskId);
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
               break
       }

       return style;
   }

    render() {
        return (
            <ul className="todo-list task-list">
            {
                this.props.todos.map((todo) => {
                    return(
                        <li className="todo" key={todo._id}>
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
                                <div className="mins-per-todo">
                                    <i className="fa fa-clock-o"></i>
                                    <span>{ Math.round(25 / this.props.todos.length) } mins</span>
                                </div>
                                <div className="remove" onClick={this._removeTask.bind(this, todo._id)}>
                                    <i className="fa fa-close"></i>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        )
        
    }
}

export default TodoList;
