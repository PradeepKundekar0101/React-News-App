
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/"><News apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in"/></Route>
          <Route path="/business"><News  key="1" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="2" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="3" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="general"/></Route>
          <Route exact path="/health"><News key="4" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="health"/></Route>
          <Route exact path="/science"><News key="5" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="6" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="7" apiKey="7d4830fd4fd54ab38b4db807621cb25b" pagesize="5" country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App



