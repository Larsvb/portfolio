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

          <div className="projects-container code">

            <h2 className="sub-title">Codeer Projecten</h2>

            <NavLink className="project shadow" to="/portfolio/androidapp">
              <img src={Bg}></img>
              <div className="content">
                <h2>Android Applicatie</h2>
                <strong className='project-sum'>Pokedex app d.m.v. Android Studio</strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Grownhome</h2>
                <strong className='project-sum'></strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>
          </div>

          <div className="projects-container design">

            <h2 className="sub-title">Design Projecten</h2>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>

            <NavLink className="project shadow" to="/">
              <img src={Bg}></img>
              <div className="content">
                <h2>Project 1</h2>
                <strong className='project-sum'>Info about the project</strong>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;