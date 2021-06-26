import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Auth from './Components/Auth/Auth'
import About from './Components/About/About'
import Donate from './Components/Donate/Donate'
import Home from './Components/Home/Home'



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="donate">
          <Donate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
