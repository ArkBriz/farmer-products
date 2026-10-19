import React from "react";
import Title, {TitleSize} from '../title/title';
import CardLabel from '../card-label/card-label';
import './style.css';

function AdvantageCard({title, text, image, type}) {
  return (
    <article className="advantage-card">
      <Title as="h3" size={TitleSize.SMALL}>{title}</Title>
      <p className="advantage-card__text">{text}</p>
      <CardLabel type={type} />
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