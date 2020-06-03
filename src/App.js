import React from 'react';
import './Main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import MyWork from './pages/MyWork'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/mywork" component={MyWork} />
        </Switch>
      </Router>
  );
}

export default App;
