import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {
    return(
        <div className="row nav">
            <div className="full-row">
                <div className="container">
                    <div className='logo'>
                        <h2>Lars van Boven</h2>
                    </div>
                    <div className="menu">
                        <NavLink className="menu-item" to='/' activeClassName="selected">Home</NavLink>
                        <NavLink className="menu-item" to='about' activeClassName="selected">About</NavLink>
                        <NavLink className="menu-item" to='skills'activeClassName="selected">Skills</NavLink>
                        <NavLink className="menu-item" to='mywork'activeClassName="selected">MyWork</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Nav;
