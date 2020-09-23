import React from 'react';
import Input from '../Input'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <p>STARTUP ARGENTINA</p>
      <Input />
      <Link to='/addstartup'><button>Agregar Startup</button></Link>
    </>
  );
}

export default Navbar;