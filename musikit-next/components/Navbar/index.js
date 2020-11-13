import Link from 'next/link'
// import './style.scss'

function Navbar() {
  return (
    <nav>
      <ul>
        <Link href=''><li>Destacados</li></Link>
        <Link href=''><li>Podcasts</li></Link>
        <Link href=''><li>Playlists</li></Link>
        <Link href=''><li>Descubrir</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;