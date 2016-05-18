import { createStore } from 'redux';
import reducer from './reducer';

export default function configureStore(initialState = { todos: [] }) {
    return createStore(reducer, initialState);
}
