import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { doLogin } from './actions';
import io from 'socket.io-client';

import 'antd/dist/antd.css';
import './css/style.scss';

const store = createStore(rootReducer);

console.log('Init Store', store.getState());

store.subscribe(function() {
    console.log('Store Changed', store.getState());
});

let socket = io('http://127.0.0.1:8000');

if(localStorage.getItem('username')) {
    store.dispatch(doLogin({
        username: localStorage.getItem('username'),
        display_name: localStorage.getItem('display_name')
    }));

    socket.emit('set-login', {username: localStorage.getItem('username')});
}

socket.on('personal-message', function(data) {
    console.log(data);
});

ReactDOM.render(
    <Provider store={store}>
        <App socket={socket} />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
