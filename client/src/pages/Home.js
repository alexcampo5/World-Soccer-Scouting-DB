// import { useEffect, useState } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className="homepage">
      <h1>World Soccer DB</h1>
      <div className="button-container">
        <Link to="/players">
          <button className="home-button">See All Players</button>
        </Link>
        <Link to="/newplayer">
          <button className="home-button">Add new player</button>
        </Link>
      </div>
    </div>
  )
}
