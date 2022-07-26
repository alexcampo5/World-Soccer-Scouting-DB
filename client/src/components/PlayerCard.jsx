export default function PlayerCard (props) {
  return (
    <div>
      <image src={props.image}/>
      <h1>{props.playerName}</h1>
      <div>
        <h4>Age: {props.age}</h4>
        <h4>Nationality: {props.nationality}</h4>
        <h4>Height: {props.height}</h4>
        <h4>League: {props.league.leagueName}</h4>
        <h4>Club: {props.club}</h4>
        <h4>Skills: {props.skills}</h4>
      </div>
    </div>
  )
}