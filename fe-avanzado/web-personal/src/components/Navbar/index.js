import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Navbar() {
  const info = useContext(AlgoContext);
  const { name } = info.data
  return (
    <div className='navbarWrapper'>
      <h2 className='navbarName'>{name}</h2>
    </div>
  );
}

export default Navbar;