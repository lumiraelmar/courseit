import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { addInputValue } from '../../store'

function Input() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue)
 function handleChange(e) {
    dispatch(addInputValue(e.target.value))
  }

  return (
    <>
      <input type='text' onChange={handleChange} value={inputValue}/>
    </>
  );
}

export default Input;