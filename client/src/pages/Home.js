import { useEffect, useState } from 'react-router-dom'

export default function Home(props) {
  return (
    <div className="homepage">
      <h1>World Soccer DB</h1>
      <div className="button-container">
        <button>See All Players</button>
        <button>Add new player</button>
        <button>Watchlists</button>
      </div>
    </div>
  )
}
