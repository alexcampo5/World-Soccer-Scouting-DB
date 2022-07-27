import {Link} from 'react-router-dom'

export default function Header () {
  return (
    <header>
      <nav>
        <Link to='/' style={{color: 'white', textDecoration: 'none'}}>Home</Link>
        <Link to='/players' style={{color: 'white', textDecoration: 'none'}}>All Players</Link>
        <Link to='/newplayer' style={{color: 'white', textDecoration: 'none'}}>Add Player</Link>
      </nav>
    </header>
  )
}