import React from "react";
import logo from '../../../assets/image/logo.svg';
import './style.css';

function Logo() {
  return (
    <a href="/" className="logo-link">
      <img src={logo} width={44} height={44} alt="Логотип" />
      <span className="logo-link__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;