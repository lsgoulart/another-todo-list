let actions =  {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    },

    toggleCompleteTodo: function(_id) {
        return {
            type: 'TOGGLE_COMPLETE_TODO',
            _id
        }
    },

    setPriorityTodo: function(_id, priority) {
        return {
            type: 'SET_PRIORITY_TODO',
            _id,
            priority
        }
    },

    removeTodo: function(_id) {
        return {
            type: 'REMOVE_TODO',
            _id
        }
    },
}

export default actions;
