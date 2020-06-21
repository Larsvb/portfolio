import React from 'react';
import './Main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from './components/Nav'
import Sidebar from './components/Sidebar';

import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio';
import AndroidApp from './pages/projects/AndroidApp';


function App() {
  return (
    <Router>
      <Sidebar />
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/overmij" component={About} />
          {/* <Route exact path="/skills" component={Skills} /> */}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/androidapp" component={AndroidApp} />
        </Switch>
      </Router>
  );
}

export default App;
