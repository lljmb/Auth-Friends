import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
