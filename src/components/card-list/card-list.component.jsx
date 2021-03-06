import React from "react";
import Card from "../card/card.component";
import './card-list.style.css';

const CardList = (props) => {
return (
<div className="cards">
{props.monsters.map(monster => (
    <Card key={monster.id} monsters={monster} />
  ))}
</div>
)
}

export default CardList