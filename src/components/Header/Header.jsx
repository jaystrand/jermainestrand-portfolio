import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <h1>Jermaine Strand</h1>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;