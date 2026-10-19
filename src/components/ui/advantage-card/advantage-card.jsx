import React from "react";
import Title, {TitleSize} from '../title/title';
import CardLabel from '../card-label/card-label';
import './style.css';

function AdvantageCard({title, text, image, type}) {
  let bgColor;

  switch (type) {
    case 'farmer':
      bgColor = "#E1EDCE";
      break;
    case 'shop':
      bgColor = "#F8DDD7";
      break;
    default:
      bgColor = "#ffffff";
  }

  return (
    <article className="advantage-card" style={{backgroundColor: bgColor}}>
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