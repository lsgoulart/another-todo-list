let actions =  {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    }
}

export default actions;

// store.dispatch(addTodo('Add this fucking shit, please?'));
