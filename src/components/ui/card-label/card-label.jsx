import React from "react";
import "./style.css";

export const ProductType = {
  FARMER: 'farmer',
  SHOP: 'shop'
};

function CardLabel({type}) {
  let options;

  switch (type) {
    case ProductType.FARMER:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88AA4D"
      };
      break;
    case ProductType.SHOP:
      options = {
        text: "Магазинные продукты",
        bgColor: "#F75531",
      };
      break;
  }

  return options.text ? (
    <span
      className="advantage-card__label"
      style={{backgroundColor: options.bgColor}}
    >
      {options.text}
    </span>
  ) : null;
}

export default CardLabel;