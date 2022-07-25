import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AllPlayers from './pages/AllPlayers'
import NewPlayer from './pages/NewPlayer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<AllPlayers />} />
          <Route path="/newplayer" element={<NewPlayer />} />
          {/* <Route path="/" element /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
