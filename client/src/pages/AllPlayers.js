import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Search from '../components/Search'

export default function AllPlayers(props) {
  const [allPlayers, setAllPlayers] = useState([])
  const [playerSearch, setPlayerSearch] = useState('')
  const [searchedPlayer, setSearchedPlayer] = useState(null)
  const [searchToggle, setSearchToggle] = useState(false)
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

  const handleSearch = (e) => {
    setPlayerSearch(e.target.value)
  }

  const findPlayer = (e) => {
    e.preventDefault()
    let correctPlayer = allPlayers.find(
      (currentPlayer) => currentPlayer.playerName === playerSearch
    )
    setSearchToggle(!searchToggle)
    setSearchedPlayer(correctPlayer)
  }

  return !searchToggle ? (
    <div>
      <h1> All Players</h1>
      <br></br>
      <Search handleChange={handleSearch} onClick={findPlayer} />
      <br></br>
      <section>
        {allPlayers.map((currentPlayer) => (
          <div
            key={currentPlayer._id}
            className="individual-player"
            onClick={() => handleDetailsClick(currentPlayer)}
          >
            <img src={currentPlayer.image} alt="Player headshot" />
            <h2>{currentPlayer.playerName}</h2>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div>
      <h1> All Players</h1>
      <br></br>
      <Search handleChange={handleSearch} onClick={findPlayer} />
      <br></br>
      <section>
        <div
          key={searchedPlayer._id}
          className="individual-player"
          onClick={() => handleDetailsClick(searchedPlayer)}
        >
          <img src={searchedPlayer.image} alt="Player headshot" />
          <h2>{searchedPlayer.playerName}</h2>
        </div>
      </section>
    </div>
  )
}
