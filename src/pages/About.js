import React from 'react';

import Bg from '../images/code.jpg'
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

function About() {
  return (
    <div className="row about">
      <div className="img">
        <img src={Bg} alt='code-bg'></img>
      </div>
      <div className="full-row">
        <div className="container">
            <div className="title">
              <h1>Over mij</h1>
            </div>

            <div className="text-container">
              <div className="story">
                <p> 
                Mijn naam is Lars van Boven, ik ben een 21 jarige afgestudeerde media-vormgever en momenteel 
                een Full-Stack webdeveloper / CMGT student op Hogeschool Rotterdam. <br /><br />

                Door vroeg in aanmerking te komen met Photoshop is mijn passie voor 
                design met de jaren steeds meer gegroeid. Dat groeien gebeurde nadat ik mijn middelbare school 
                had afgerond en ik de MBO4 opleiding media-vormgeving ben gaan volgen op het Grafisch Lyceum Rotterdam.<br /><br />

                Hierbij werd mij duidelijk dat de interactieve wereld mijn aandacht en passie het meest trok. 
                In het 2e jaar had ik de "Interaction Design" richting gekozen en ben ik de basis kennis van HTML, 
                CSS en Javascript gaan leren d.m.v de lessen. Na een jaar stage te hebben gelopen bij een internet bureau is mijn 
                kennis en vaardigheden op dit gebied alleen maar gegroeid. <br /><br />

                Na het succesvol afronden van deze opleiding wilde ik meer kennis vergen en 
                mij verdiepen in web development en design. De HBO-opleiding Creative Media & Game Technology was 
                hiervoor een perfecte opleiding omdat dit een mooie combinatie levert tussen webdesign, 
                Front-end en Backend development. <br /><br />

                Momenteel zit ik in het tweede jaar van opleiding CMGT op de Hogeschool Rotterdam. 
                Hierbij krijg ik kennis over doelgroeponderzoeken en Gebruikstest (Usability testing) 
                tot aan backend development.
                </p>
              </div>

              <div className="extra-story-container">
                  <div className="char">
                    <h2>Kenmerken</h2>

                    <ul>
                      <li>Perfectionistisch</li>
                      <li>Behulpzaam</li>
                      <li>Oog voor detail</li>
                      <li>Leergierig</li>
                      <li>Doorzettingsvermogen</li>
                    </ul>
                  </div>
                  <div className="hobbies">
                    <h2>Hobbies</h2>

                    <ul>
                      <li>Fitness</li>
                      <li>Muziek luisteren</li>
                      <li>Fotografie</li>
                      <li>Front-end & designen</li>

                    </ul>
                  </div>
              </div>

            </div>

            <div className="title second">
                <h2>Kennis & Ervaringen</h2>
              </div>
              <div className="text-container">
                <div className="intro">
                  <p> 
                      Stages, opleidingen, zelfstudie en werk hebben ertoe geleidt dat ik met de volgende onderdelen <br />
                      Kennis en ervaringen heb opgedaan.
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

export default About;