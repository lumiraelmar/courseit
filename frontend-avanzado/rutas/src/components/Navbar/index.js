import React from 'react'
import './style.scss';

function Navbar(props) {
  function handleChange(e) {
    props.handleCallback(e.target.value)
  }

  return(
    <div className='navbarWrapper'>
      <input type='text' onChange={handleChange} className='input' placeholder='buscate algo'/>
    </div>
  )
}

export default Navbar;