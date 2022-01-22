import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import rootSaga from './redux/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, withDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
