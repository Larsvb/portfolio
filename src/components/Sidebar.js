import React from 'react';

import { ReactComponent as Github } from '../images/icons/github-image.svg'
import { ReactComponent as Linkedin } from '../images/icons/linkedin.svg'
import { ReactComponent as Instagram }from '../images/icons/instagram.svg'

function Sidebar() {
    return(
        <div className="bar">
            <div className="bar-container">
                <div className="socials">
                    <a href="https://github.com/Larsvb"><Github /></a>
                    <a href="https://www.linkedin.com/in/lars-van-boven-97a924141/"><Linkedin /></a>
                    <a href="https://www.instagram.com/_larsvb/"><Instagram /></a>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
