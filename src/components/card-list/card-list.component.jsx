import React from "react";
import Card from "../card/card.component";

const CardList = (props) => {
return (
<div>
{props.monsters.map(monster => (
    <Card key={monster.id} monsters={monster} />
  ))}
</div>
)
}

export default CardList