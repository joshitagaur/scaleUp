import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import UserList from './components/users/UserList'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/dashboard'component={Dashboard} />
            <Route exact path='/users' component={UserList} />
            <Route exact path='/' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
