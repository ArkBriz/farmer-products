import React from "react";
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import './style.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;