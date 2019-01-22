import React, { Component } from 'react';

import 'antd/dist/antd.css';
import './css/style.scss';

import Login from './components/Login';
import Signup from './components/Signup';
import ChatApp from './components/ChatApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatApp />
      </div>
    );
  }
}

export default App;
