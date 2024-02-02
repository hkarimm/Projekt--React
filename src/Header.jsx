import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  return (
    <header className="header"> {}
      <div className=""></div>
      <nav className="nav">
        <ul>
          <li><Link to="/about">Om mig</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
