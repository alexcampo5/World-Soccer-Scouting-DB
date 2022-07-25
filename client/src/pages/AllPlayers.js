import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState([])

  const getAllPlayers = async () => {
    const res = await axios.get('http://localhost:3001/players')
    console.log(res.data.allLeagues)
    setAllPlayers(res.data.allLeagues)
  }

  useEffect(() => {
    getAllPlayers()
  }, [])

  return (
    <div>
      <h1> All Players</h1>
      <br></br>
      <section>
        {allPlayers.map((currentPlayer) => (
          <div key={currentPlayer._id}>
            <img src={currentPlayer.image} />
            <h1>{currentPlayer.playerName}</h1>
            <button>See more details</button>
          </div>
        ))}
      </section>
    </div>
  )
}
