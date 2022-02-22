import './card.style.css'
const Card = (props) => {
  return (
<div className="card-container">
  <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="" />
  <h2>
    {props.monsters.name}
    </h2>
</div>
  )
}

export default Card