import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';
import configureStore from '../redux/store';
import { Provider } from 'react-redux';

let initialState = {
    todos: [
        {
            _id: 0,
            text: 'First TODO added! Yey',
            completed: false,
            priority: 0,
            created_at: Date.now(),
        }
    ]
};

let store = configureStore(initialState);

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
