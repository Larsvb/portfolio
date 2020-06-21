import React from 'react';
import { Player } from 'video-react';

import StyleGuide from '../../images/grownhome/styleguide.png';
import AdobeXD from '../../images/grownhome/AdobeXD.png';

function GrownHome() {
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

                    <p>Voor het eerste half jaar in het tweede leerjaar van CMGT kregen wij als opdracht om het bedenken, ontwerpen en ontwikkelen van 
                      innovatieve producten binnen het thema natuur. De hoofdvraag van dit project luidt: “Hoe kunnen we van fossiele brandstoffen 
                      overgaan op duurzame energiebronnen?” Of in elk geval op weg daarnaartoe zoveel mogelijk energie besparen? Aan mijn projectgroep 
                      en ik de taak om een product te ontwikkelen wat hierbij zal helpen.
                    </p>

                    <p>
                      Het product wat we hierbij hebben bedacht en ontwikkeld is een (web)app die mensen helpt bij het onderhouden van hun Groente & Fruit planten 
                      die ze in hun huis hebben staan. Deze app / service heet GrownHome. Mensen kunnen een account aan kunnen maken. Zodra ze een 
                      account hebben kunnen ze op de overzicht pagina hun verschillende soorten planten toevoegen die zij momenteel thuis hebben staan. 
                      Doordat ze hun planten toevoegen aan hun overzicht zorgt de app ervoor dat mensen d.m.v. notificaties worden ingelicht tijdens het onderhoud proces van de 
                      planten. 
                    </p>

                    <p>
                      Deze notificaties kunnen aangeven dat ze bijvoorbeeld hun plant water moet geven, of oogsten of evt. snoeien. 
                      Hiermee willen wij het onderhouden van eigen moestuintjes in huis gemakkelijker maken en efficiënter voor de mensen. Dit zal er voor zorgen dat
                      mensen minder kant en klare kruiden, groenten, etc. zullen kopen wat weer bespaard op het plastic verbruik van die productverpakkingen.
                    </p>
                </div>

                <div className='my-role'>
                  <h2 className='sub-title'>Mijn rol in dit project</h2>

                  <p>Tijdens dit project was ik de ontwerper van de (web)app. Ik heb verschillende onderzoeken gedaan met het team om het concept en de doelgroep goed in context te brengen, 
                    een styleguide gemaakt voor ons product om richtlijnen te hebben wat betreft kleuren, fonts en inspiratie. </p>

                  <div className='content-image'>
                    <img src={StyleGuide} alt='Styleguide'></img>
                  </div>
                  
                  <p>
                    Door wireframes te schetsen en te maken heb ik uiteindelijk een volledig
                    gedesignde clickable prototype kunnen maken d.m.v. Adobe XD. Hierdoor konden we de (web)app in een keer goed vormgeven.
                    
                    Na dit ben ik de front-end gaan ontwikkelen en het design gaan realiseren voor ons product. 
                    Hiervoor had ik gebruik gemaakt van het Tailwind CSS framework.
                  </p>

                  <div className='content-image'>
                    <img src={AdobeXD} alt='Styleguide'></img>
                  </div>

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

export default GrownHome;