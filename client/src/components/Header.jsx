import {Link} from 'react-router-dom'

export default function Header () {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/players'>All Players</Link>
        <Link to='/newplayer'>Add Player</Link>
      </nav>
    </header>
  )
}