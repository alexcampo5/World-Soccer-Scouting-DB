import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'
import axios from 'axios'
import EditPlayer from "./EditPlayer"
import editphoto from '../photos/editimage.png'

export default function PlayerCard (props) {
  const [playerDetails, setPlayerDetails] = useState(null)
  const [showEditForm, setEditForm] = useState(false)
  const [leagueDetails, setLeagueDetails] = useState(null)

  let {id} = useParams()

  const getPlayerDetails = async () => {
    let res = await axios.get(`http://localhost:3001/players/${id}`)
    setPlayerDetails(res.data.player)
  }

  useEffect(() => {
    getPlayerDetails()
  })

  const deletePlayer = async () => {
    await axios.delete(`http://localhost:3001/players/${id}`)
    console.log('player deleted')
  }


  const getLeagueDetails = async () => {
    let res = await axios.get(`http://localhost:3001/leagues/${playerDetails.league[0]}`)
    setLeagueDetails(res.data.league)
  }

  useEffect(() => {
    getLeagueDetails()
  }, [playerDetails])

  const toggleEditForm = () => {
    setEditForm(!showEditForm)
    console.log(showEditForm)
  }


  return playerDetails && leagueDetails ? (
    <div>
      <div className='player-content-container'>
      <h1>{playerDetails.playerName}</h1>
      <img src={playerDetails.image} alt='Player'/>
      <div className="raw-data-container">
        <div className='stat-container'>
          <h4 className='stat'>Age: {playerDetails.age}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='age' title='Age' visible={showEditForm} currentValue={props.age}/>
        </div>
        <div className='stat-container' >
          <h4 className='stat'>Nationality: {playerDetails.nationality}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='nationality' title='Nationality' visible={showEditForm} currentValue={props.nationality}/>
        </div>
        <div className='stat-container' >
        <h4 className='stat'>Height: {playerDetails.height}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='height' title='Height' visible={showEditForm} currentValue={props.height}/>
        </div>
        <div className='stat-container' >
        <h4 className='stat'>League: {leagueDetails.leagueName}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='league' title='League' visible={showEditForm} currentValue={props.league}/>
        </div>
        <div className='stat-container' >
        <h4 className='stat'>Club: {playerDetails.club}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='club' title='Club' visible={showEditForm} currentValue={props.club}/>
        </div>
        <div className='stat-container' >
        <h4 className='stat'>Skills: {playerDetails.skills}</h4> <img onClick={toggleEditForm} className='edit-button' src={editphoto} alt='edit'/> <EditPlayer category='skills' title='Skills' visible={showEditForm} currentValue={props.skills}/>
        </div>
      </div>
      </div>
      <div>
        <button onClick={deletePlayer} className='delete-button'>Delete player</button>
      </div>
    </div>
  ) : <h1>Player does not exist</h1>;
}