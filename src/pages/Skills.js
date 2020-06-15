import React from 'react';


function Skills() {
  return (
    <div className="row skills">
      {/* <div className="img">
        <img src={Bg} alt='code-bg'></img>
      </div> */}
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

                    <div class='icon'>

                    </div>

                </div>

                <div className='icons'>
                    <h2 className='type'>Codeertalen</h2>

                    <div class='icon'>
                        
                    </div>

                </div>

                <div className='icons'>
                    <h2 className='type'>Software</h2>

                    <div class='icon'>
                        
                    </div>

                </div>
             
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;