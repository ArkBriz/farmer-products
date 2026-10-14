import React from "react";
import './style.css';

function Title({children, size, as = 'h1'}) {
  const TitleTag = as;

  const TitleSizes = {
    BIG: 'big',
    SMALL: 'small',
    DEFAULT: '',
  }
  
  return (
    <TitleTag className={`title${size ? ` title-${size}` : ''}`}>{children}</TitleTag>
  );
}

export default Title;