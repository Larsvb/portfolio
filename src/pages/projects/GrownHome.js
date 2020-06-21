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
                        
                    <a className='button shadow' href='https://github.com/T-Lander/GrownHome'>Github Repository link</a>
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