import React from "react";
import './style.css';

export const TitleSize = {
  BIG: 'big',
  SMALL: 'small',
  DEFAULT: '',
}

function Title({children, size, as = 'h1'}) {
  const TitleTag = as;
  
  return (
    <TitleTag className={`title${size ? ` title-${size}` : ''}`}>{children}</TitleTag>
  );
}

export default Title;