import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {

  const logout = () => {

  }

  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </ul>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
