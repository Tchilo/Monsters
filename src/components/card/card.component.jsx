import './card.style.css'
const Card = (props) => {
  return (
<div className="card-container">
  <h2>
    {props.monsters.name}
    </h2>
</div>
  )
}

export default Card