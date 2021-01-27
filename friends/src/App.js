import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {

  const logout = () => {
    axios.post('http://localhost:5000/api/logout', {
      headers: {
        authenticaton: localStorage.getItem('token')
      }
    })
    .then(res => { 
      console.log(res)
    })
    .catch(err => {
      console.log('App error: ', err)
    })
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
        <Route exact path='/protected'/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
