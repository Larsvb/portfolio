import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
    return(
        <div className="row nav">
            <div className="full-row">
                <div className="container">
                    <div className='logo'>
                        <h2>Lars van Boven</h2>
                    </div>
                    <nav>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <Link to='/about'><li>About</li></Link>
                            <Link to='/skills'><li>Skills</li></Link>
                            <Link to='/mywork'><li>MyWork</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}
export default Nav;
