import React from 'react';
import Input from '../Input'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <p>STARTUP ARGENTINA</p>
      <Input />
      <Link to='/addstartup'><Button label='Agregar Startup'/></Link>
    </>
  );
}

export default Navbar;