import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import ChatApp from './components/ChatApp';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Route path='/' exact render={(props) => <ChatApp socket={this.props.socket}/>} />
                <Route path='/login' render={(props) => <Login socket={this.props.socket} />} />
                <Route path='/signup' render={(props) => <Signup socket={this.props.socket} />} />
            </div>
        </Router>
    );
  }
}

export default App;
