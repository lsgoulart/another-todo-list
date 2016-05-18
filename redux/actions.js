export default actions {
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    }
}


store.dispatch(addTodo('Add this fucking shit, please?'));
