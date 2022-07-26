import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AllPlayers from './pages/AllPlayers'
import NewPlayer from './components/NewPlayer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
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

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<AllPlayers />} />
          <Route
            path="/newplayer"
            element={
              <NewPlayer handleChange={handleChange} onSubmit={addNewPlayer} />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
