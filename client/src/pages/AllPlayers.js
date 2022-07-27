import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AllPlayers(props) {
  const [allPlayers, setAllPlayers] = useState([])
  let navigate = useNavigate()

  const getAllPlayers = async () => {
    const res = await axios.get('http://localhost:3001/players')
    console.log(res.data.allLeagues)
    setAllPlayers(res.data.allLeagues)
  }

  useEffect(() => {
    getAllPlayers()
  }, [])

  const handleDetailsClick = (player) => {
    navigate(`${player._id}`)
  }

  return (
    <div>
      <h1> All Players</h1>
      <br></br>
      <section>
        {allPlayers.map((currentPlayer) => (
          <div
            key={currentPlayer._id}
            className="individual-player"
            onClick={() => handleDetailsClick(currentPlayer)}
          >
            <img src={currentPlayer.image} />
            <h2>{currentPlayer.playerName}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}
