import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import EditPlayer from "./EditPlayer"

export default function PlayerCard (props) {
  const [playerDetails, setPlayerDetails] = useState(null)
  const [showEditForm, setEditForm] = useState(false)

  let {id} = useParams()

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


  
  const toggleEditForm = () => {
    setEditForm(!showEditForm)
    console.log(showEditForm)
  }


  return playerDetails ? (
    <div>
      <div className='player-content-container'>
      <h1>{playerDetails.playerName}</h1>
      <img src={playerDetails.image} alt='Player'/>
      <div>
        <div className='stat-container'  >
          <h4>Age: {playerDetails.age}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='age' title='Age' visible={showEditForm} currentValue={props.age}/>
        </div>
        <div className='stat-container' >
          <h4>Nationality: {playerDetails.nationality}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='nationality' title='Nationality' visible={showEditForm} currentValue={props.nationality}/>
        </div>
        <div className='stat-container' >
        <h4>Height: {playerDetails.height}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='height' title='Height' visible={showEditForm} currentValue={props.height}/>
        </div>
        <div className='stat-container' >
        <h4>League: {playerDetails.league[0].leagueName}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='league' title='League' visible={showEditForm} currentValue={props.league}/>
        </div>
        <div className='stat-container' >
        <h4>Club: {playerDetails.club}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='club' title='Club' visible={showEditForm} currentValue={props.club}/>
        </div>
        <div className='stat-container' >
        <h4>Skills: {playerDetails.skills}</h4> <button onClick={toggleEditForm}>Edit</button> <EditPlayer category='skills' title='Skills' visible={showEditForm} currentValue={props.skills}/>
        </div>
      </div>
      </div>
      <div>
        <button onClick={deletePlayer}>Delete player</button>
      </div>
    </div>
  ) : <h1>Player does not exist</h1>;
}