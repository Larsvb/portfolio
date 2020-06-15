import React from 'react';

import Bg from '../images/bg.jpg'
import Bootstrap from '../images/logos/bootstrap.png'
import Reactimg from '../images/logos/react.png'
import laravel from '../images/logos/laravel.png'
import Html from '../images/logos/html.png'
import Css from '../images/logos/css.png'
import Sass from '../images/logos/sass.png'
import Typescript from '../images/logos/typescript.png'
import Php from '../images/logos/php.png'
import Javascript from '../images/logos/javascript.png'
import Java from '../images/logos/java.png'
import Xd from '../images/logos/xd.png'
import Ps from '../images/logos/photoshop.png'
import Il from '../images/logos/illustrator.png'
import Ae from '../images/logos/aftereffects.png'
import As from '../images/logos/androidstudio.png'




function Skills() {
  return (
    <div className="row skills">
      <div className="img">
        <img src={Bg} alt='code-bg'></img>
      </div>
      <div className="full-row">
        <div className="container">
            <div className="title">
              <h1>Knowledge & <br />Experiences</h1>
            </div>
            <div className="text-container">
              <div className="intro">
                <p> 
                    D.m.v. mijn opleidingen, stageperiodes en werkervaringen heb ik, 
                    met <br />de hieronder aangegeven onderdelen naast kennis, ook vaardigheden opgebouwd.
                </p>
              </div>
            </div>

            <div className="icons-container">

                <div className='icons'>
                    <h2 className='type'>Frameworks & Libraries</h2>

                    <div className='icon-container'>
                        <div className='icon'>
                            <img src={Reactimg}></img>
                            <p>ReactJS</p>
                        </div>
                        <div className='icon'>
                            <img src={Bootstrap}></img>
                            <p>Bootstrap</p>
                        </div>
                        <div className='icon'>
                            <img src={laravel}></img>
                            <p>Laravel</p>
                        </div>
                    </div>
                    

                </div>

                <div className='icons'>
                    <h2 className='type'>Codeertalen</h2>
                    
                    <div className='icon-container'>
                        <div className='icon'>
                            <img src={Html}></img>
                            <p>HTML5</p>
                        </div>
                        <div className='icon'>
                            <img src={Css}></img>
                            <p>CSS</p>
                        </div>
                        <div className='icon'>
                            <img src={Sass}></img>
                            <p>Sass</p>
                        </div>
                        <div className='icon'>
                            <img src={Javascript}></img>
                            <p>JavaSript</p>
                        </div>
                        <div className='icon'>
                            <img src={Php}></img>
                            <p>PHP</p>
                        </div>
                        <div className='icon'>
                            <img src={Java}></img>
                            <p>Java</p>
                        </div>
                        <div className='icon'>
                            <img src={Typescript}></img>
                            <p>TypeSript</p>
                        </div>
                    </div>

                </div>

                <div className='icons'>
                    <h2 className='type'>Software</h2>

                    <div className='icon-container'>
                        <div className='icon'>
                            <img src={Xd}></img>
                            <p>Adobe XD</p>
                        </div>
                        <div className='icon'>
                            <img src={Ps}></img>
                            <p>Adobe Photoshop</p>
                        </div>
                        <div className='icon'>
                            <img src={Ae}></img>
                            <p>Adobe After Effects</p>
                        </div>
                        <div className='icon'>
                            <img src={Il}></img>
                            <p>Adobe Illustrator</p>
                        </div>
                        <div className='icon'>
                            <img src={As}></img>
                            <p>Android Studio</p>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;