import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { doLogin } from './actions';

import 'antd/dist/antd.css';
import './css/style.scss';

const store = createStore(reducers);

console.log('Init Store', store.getState());

store.subscribe(function() {
    console.log('Store Changed', store.getState());
});

if(localStorage.getItem('username')) {
    store.dispatch(doLogin({
        username: localStorage.getItem('username'),
        display_name: localStorage.getItem('display_name')
    }));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
