import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { setTodos } from './actions/todos';
import todos from './tests/fixtures/todos';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = getAppStore();
const TodoApp = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

store.dispatch(setTodos(todos));


ReactDOM.render(TodoApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
