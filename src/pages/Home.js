import React from 'react';

function Home() {
  return (
    <div className="row home">
      <div className="img">
        <img src={require("../images/larshome.jpg")} alt='me'></img>
      </div>
      <div className="full-row">
        <div className="container">
            <div className="title">
              <h1>Hello i'm <br />Lars van Boven</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;