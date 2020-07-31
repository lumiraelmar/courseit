import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <Link to='/checkout'>
          <p>Carrito</p>
        </Link>      
      </div>
    )
  }
}

export default Navbar;