import React from 'react';
import Title from '../Title'
import Button from '../Button'
import './style.scss';

function Navbar(props) {
  const { title, button } = props
  return (
    <nav>
      <Title title={title}/>
      <Button button={button}/>
    </nav>
  );
}

export default Navbar;