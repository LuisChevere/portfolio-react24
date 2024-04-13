import Logo from '../assets/images/morningstarlogocompressed.png';
import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="navbar">

                <img src={Logo} alt='brandlogo'></img>

                <nav className="nav">
                    <a href="#about" className="mr-5 hover:text-white">
                        About Me
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        Project
                    </a>
                    <a href="#resume" className="mr-5 hover:text-white">
                        Resume
                    </a>
                </nav>
                
            </div>
            <hr className='hr'></hr>
        </header>
    );
};