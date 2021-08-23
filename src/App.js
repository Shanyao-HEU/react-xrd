import React, {Component} from "react"
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './pages/login'
import Admin from "./pages/admin";

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Admin} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App