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
                <Route path='/' exact component={ChatApp} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </div>
        </Router>
    );
  }
}

export default App;
