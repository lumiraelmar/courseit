import React from 'react';
import SearchBar from '../SearchBar/index';
import './style.css'

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbarWrapper'>
          <h2 className='navbarTitle'>{this.props.title}</h2>
          <SearchBar placeholder='Buscar'/>
          <a className='navbarLink' href=''>{this.props.nombreLink}</a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
