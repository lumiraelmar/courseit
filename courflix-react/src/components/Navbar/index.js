import React from 'react';
import '../Navbar/style.scss'

class Navbar extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <img className='pageLogo' src={this.props.logo}></img>
        <ul className='navbar'>
          <li className='listItem'><a className='link' href={this.props.link}>Inicio</a></li>
          <li className='listItem'><a className='link' href={this.props.link}>Series</a></li>
          <li className='listItem'><a className='link' href={this.props.link}>Peliculas</a></li>
          <li className='listItem'><a className='link' href={this.props.link}>Agregadas recientemente</a></li>
          <li className='listItem'><a className='link' href={this.props.link}>Mi lista</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;