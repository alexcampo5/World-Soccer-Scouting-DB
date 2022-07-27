import axios from 'axios'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

export default function EditPlayer (props) {
  const [playerEdit, setPlayerEdit] = useState(null)
  let {id} = useParams()


  const updatePlayer = async () => {
    await axios.put(`http://localhost:3001/players/${id}`, playerEdit)
    console.log(playerEdit)
    console.log('Player info updated')
  } 

  const handleEditChange = (e) => {
    setPlayerEdit({[e.target.name]: e.target.value})
  }

  return (
    <div className='edit-player-form' style= {{display: props.visible ? 'block' : 'none'}}>
      <h1>Edit {props.title}</h1>
      <h4>Please enter updated information below...</h4>
      <form onSubmit={updatePlayer}>
        <input
          type="text"
          name={props.category}
          placeholder={props.category}
          value={props.currentValue}
          onChange= {handleEditChange}
        />
        <br></br>
        <br></br>
        <button>Submit</button>
      </form>
      <br></br>
      <br></br>
    </div>
  )
}