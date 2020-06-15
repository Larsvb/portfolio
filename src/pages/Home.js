import React from 'react';
import Mobilebg from '../images/larshomemobile.jpg'
function Home() {
  return (
    <div className="row home">
      <div className="img">
        <img src={require("../images/larshome.jpg")} alt='me'></img>
      </div>
      <div className="full-row">
        <div className="container">
            <div className='mobile-bg'>
              <img src={Mobilebg}></img>
            </div>
            <div className="title">
              <h1>Hello i'm <br />Lars van Boven</h1>
            </div>

            <div className="sub-title">
              <h4> Media vormgever & Full-Stack developer</h4> 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;