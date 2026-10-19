import React from "react";
import Title from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "../../ui/button/button";
import "./style.css";

function Advantages({advantages}) {
  return (
    <section className="advantages">
      <div className="container">
        {advantages?.length ? (
          <>
            <Title as="h2">Почему фермерские продукты лучше?</Title>
            <ul className="advantages__list">
              {advantages.map((advantage) => (
                <li className="advantages__item" key={advantage.id}>
                  <AdvantageCard {...advantage}/>
                </li>
              ))}
            </ul>
            <Button>Купить</Button>
          </>
        ) : null}
      </div>
    </section>
  );
}

export default Advantages;