import React from 'react';
import { Player } from 'video-react';

function AndroidApp() {
  return (
    <div className="row project">
      <div className="full-row">
        <div className="container">
            <div className="title">
              <h1>Pokedex Android App</h1>
            </div>

            <div className='text-container'>
                <div className='project-sum'>
                    <h2 className='sub-title'>Algemene informatie project</h2>
                    <p>Voor programmeren moest ik d.m.v. Java en Android Studio een Android applicatie maken waarin een 
                        aantal eisen moesten worden toegepast om een bepaald cijfer te behalen. deze standaard eisen waren:</p>
                    <ul>
                        <li>De opdracht heeft een passende naam (‘eindopdracht’ is geen goede naam)</li>
                        <li>Er zijn constanten gebruikt en er staan comments in de code ter verduidelijking</li>
                        <li>Er moet gebruikersinteractie in zitten</li>
                        <li>Er moeten meerdere schermen gebruikt worden in de app</li>
                        <li>Er moeten images en/of video en/of geluid gebruikt worden</li>
                        <li>Er moet informatie van internet gehaald en gebruikt worden in je app</li>
                        <li>Er moeten instellingen kunnen worden opgeslagen die ook gebruikt worden in de app
                            via de standaard manier van het platform om gebruikersinstellingen op te slaan</li>
                    </ul>
                    <p>
                        Om een hoger cijfer te behalen had ik ervoor gekozen om gebruik van GPS, meertaligheid en een lijstweergaven toe te voegen in de app.
                        Ik heb deze app uiteindelijk gerealiseerd door gebruik te maken van Android studio, Java en de Pokedex API.
                        <br /> <br />
                        Ik was helaas vergeten om bij dit project Github toe te passen. Ik heb de uiteindelijk app wel op Github gezet alleen zijn hierbij niet de commits te zien.

                        <br /><br />
                    </p>
                    <a className='button shadow' href='https://github.com/Larsvb/PokedexApp-AndroidStudio'>Github Repository link</a>

                </div>

                <div className='project-content'>
                    <h2 className="sub-title">Beeldmateriaal</h2>
                    <p>Hieronder is de video te zien waarbij elke eis en de extra toegevoegde functies van de opdracht per stuk worden weergeven.</p>
                    <Player className='shadow'>
                        <source src="https://www.youtube.com/watch?v=-22SwJh8gec" />
                    </Player>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AndroidApp;