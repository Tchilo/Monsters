import React from "react";

const CardList = (props) => {
return (
<div>
{props.monsters.map(monster => (
    <h1>{monster.name}</h1>
  ))}
</div>
)
}



export default CardList