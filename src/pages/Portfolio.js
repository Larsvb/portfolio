import React from 'react';

import { NavLink } from 'react-router-dom'
import Bg from '../images/code.jpg'

function Portfolio() {
  return (
    <div className="row portfolio">
      <div className="img">
        {/* <img src={require("../images/larshome.jpg")} alt='me'></img> */}
      </div>
      <div className="full-row">
        <div className="container">
          <div className="title">
            <h1>My Portfolio</h1>
          </div>

          <div className="projects-container">

            <h2 className="type">Codeer Projecten</h2>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>
          </div>

          <div className="projects-container">

            <h2 className="type">Design Projecten</h2>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>

            <NavLink className="project" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;