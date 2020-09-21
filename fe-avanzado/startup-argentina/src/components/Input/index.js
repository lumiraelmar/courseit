import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

function Input() {
  const Data = useContext(UserContext)
  const { handleInput } = Data

  function handleChange(e) {
    handleInput(e.target.value)
  }

  return (
    <>
      <input type='text' onChange={handleChange}></input>
    </>
  );
}

export default Input;