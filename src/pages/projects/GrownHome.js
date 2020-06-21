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
                      Het product wat we hierbij hebben bedacht en ontwikkeld heet GrownHome.<br />
                      Het ontwikkelde product, GrownHome, is een inventarisatie systeem waarin je kan aangeven welke planten je hebt. De app zal vervolgens 
                      bijhouden wanneer je deze planten water hebt gegeven en wanneer je ze weer water moet geven. Daarnaast voorziet de app je van alle informatie die je nodigt hebt om goed voor je plantjes te zorgen, zoals potgrond, belichting en plaatsing.
                      <br /><br />
                      De app is gemaakt met MySQL, Laravel, React & Tailwind. <br /><br />

                      MySQL wordt gebruikt voor de database.
                      Hiervoor hebben we gekozen omdat de standaard database is voor het laravel framework.
                      <br /><br />
                      Laravel wordt gebruikt voor de backend API.
                      Hiervoor hebben we gekozen omdat we al wat ervaring hadden met dit framework, en het veel werklast wegneemt van een backend handmatig schrijven.
                      <br /><br />
                      React wordt gebruikt voor een dynamische en fluïde frontend.
                      We hebben hier voor gekozen om de performance van de webpagina flink te verbeteren. Daarnaast geeft deze library ons de mogelijkheid om eenvoudig animaties toe te voegen aan onze app.
                      <br /><br />
                      Tailwind wordt gebruikt voor CSS styling.
                      We hebben gekozen voor deze CSS library omdat de componenten er goed uitzien en het eenvoudig is om mee te werken. Daarnaast is het werken met een CSS library een stuk sneller dan alles handmatig schrijven.
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
                    <img src={AdobeXD} alt='Adobe XD prototype'></img>
                  </div>

                  <a className='button shadow' href='https://github.com/T-Lander/GrownHome'>Github Repository link</a>
                 
                </div>

                <div className='project-content'>
                    <h2 className="sub-title">Beeldmateriaal</h2>
                    <p>De video waarin we ons product gebruiken is hieronder te zien.</p>
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