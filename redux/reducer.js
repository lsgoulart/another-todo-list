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
        case 'TOGGLE_COMPLETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return (todo._id === action._id) ? Object.assign({}, todo, {completed: !todo.completed}) : todo
                })
            });
            break;
        case 'SET_PRIORITY_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    return (todo._id === action._id) ? Object.assign({}, todo, {priority: (todo.priority < 2) ? todo.priority+1 : 0 }) : todo
                })
            })
            break;
        case 'REMOVE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                    return todo._id !== action._id
                })
            });
            break;
        default:
            return state;
    }
}
