import React, { useState } from 'react';

function AddTask(props) {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleClick() {
    if (inputValue != '') {
      props.handleCallback(inputValue)
      setInputValue('')
    }
  }

  function handleKeyDown(e) {
    if (e.keyCode == 13) {
      addTask()
    }
  }

  function addTask() {
    if (inputValue != '') {
      props.handleCallback(inputValue)
      setInputValue('')
    }
  }


  return(
    <>
      <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue}/>
      <button onClick={handleClick}>Agregar</button>
    </>
  )
}

export default AddTask