import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function PlayerCard (props) {
  const [playerDetails, setPlayerDetails] = useState(null)
  let {id} = useParams()

  // useEffect(() => {
  //   let selectedPlayer = props.players.find((currentPlayer) => currentPlayer._id === (id))
  // })

  const getPlayerDetails = async () => {
    let res = await axios.get(`http://localhost:3001/players/${id}`)
    console.log(res.data.player)
    setPlayerDetails(res.data.player)
  }

  useEffect(() => {
    getPlayerDetails()
  }, [])

  const deletePlayer = async () => {
    await axios.delete(`http://localhost:3001/players/${id}`)
    console.log('player deleted')
  }


  return playerDetails ? (
    <div>
      <div className='player-content-container'>
        {/* <image src={playerDetails.image}/> */}
      <h1>{playerDetails.playerName}</h1>
      <div>
        <h4>Age: {playerDetails.age}</h4>
        <h4>Nationality: {playerDetails.nationality}</h4>
        <h4>Height: {playerDetails.height}</h4>
        <h4>League: {playerDetails.league[0].leagueName}</h4>
        <h4>Club: {playerDetails.club}</h4>
        <h4>Skills: {playerDetails.skills}</h4>
      </div>
      </div>
      <div>
        <button onClick={deletePlayer}>Delete player</button>
      </div>
    </div>
  ) : <h1>Player does not exist</h1>;
}