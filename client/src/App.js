import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AllPlayers from './pages/AllPlayers'
import NewPlayer from './components/NewPlayer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import PlayerCard from './components/PlayerCard'
import EditPlayer from './components/EditPlayer'

function App() {
  const [allPlayers, setAllPlayers] = useState([])
  const [newPlayer, setNewPlayer] = useState({
    playerName: '',
    image: '',
    age: '',
    nationality: '',
    height: '',
    skills: [],
    club: '',
    league: ''
  })
  let navigate = useNavigate()

  const handleChange = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value })
  }

  const addNewPlayer = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3001/players', newPlayer)
    setNewPlayer({
      playerName: '',
      image: '',
      age: '',
      nationality: '',
      height: '',
      skills: [],
      club: '',
      league: ''
    })
  }

  useEffect(() => {
    addNewPlayer()
  }, [])

  const getAllPlayers = async () => {
    const res = await axios.get('http://localhost:3001/players')
    setAllPlayers(res.data.allLeagues)
  }

  useEffect(() => {
    getAllPlayers()
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/players"
            element={<AllPlayers players={allPlayers} />}
          />
          <Route
            path="/players/:id"
            element={<PlayerCard players={allPlayers} />}
          />
          <Route
            path="/newplayer"
            element={
              <NewPlayer handleChange={handleChange} onSubmit={addNewPlayer} />
            }
          />
          <Route path="/edit/:id" element={<EditPlayer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
