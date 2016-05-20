function getId(state) {
    return state.todos.reduce((maxId, todo) => { return Math.max(todo._id, maxId)}, -1) + 1;
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [{
                    _id: getId(state),
                    text: action.text,
                    completed: false,
                    priority: 0,
                    created_at: Date.now()
                }, ...state.todos]
            });
            break;
        default:
            return state;
    }
}
