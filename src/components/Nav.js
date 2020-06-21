import React from 'react';
import { NavLink } from 'react-router-dom'

import Logo from '../images/logos/logo.png'

function Nav() {
    return(
        <div className="row nav">
            <div className="full-row">
                <div className="container">
                    <div className='logo'>
                        <NavLink to="/"><img src={Logo}></img><h2>Lars van Boven</h2></NavLink>
                    </div>
                    <div className="menu">
                        
                        <NavLink className="menu-item" to='/overmij' activeClassName="selected">Over mij</NavLink>
                        {/* <NavLink className="menu-item" to='/skills'activeClassName="selected">Skills</NavLink> */}
                        <NavLink className="menu-item" to='/portfolio'activeClassName="selected">Portfolio</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nav;
