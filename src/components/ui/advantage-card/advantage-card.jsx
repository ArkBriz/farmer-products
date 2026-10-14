import React from "react";
import Title, {TitleSize} from './title';
import './style.css';

function AdvantageCard({title, text, image}) {
  return (
    <article className="advantage-card">
      <Title as="h3" size={TitleSize.SMALL}>{title}</Title>
      <p className="advantage-card__text">{text}</p>
      <span className="advantage-card__label">Продукты</span>
      <img 
        className="advantage-card__img" 
        src={image} 
        alt="" 
        width={56} 
        height={56}
      />
    </article>
  );
}

export default AdvantageCard;