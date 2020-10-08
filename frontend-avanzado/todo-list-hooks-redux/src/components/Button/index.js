import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store'

function Button() {
  const dispatch = useDispatch();
  
  function handleClick() {
    dispatch(addItem())
  }

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
}


export default Button;