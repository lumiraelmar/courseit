import React from 'react';

function Task(props) {
  const { name, completed, handleCallback } = props

  function handleClick() {
    if (handleCallback) {
      props.handleCallback(name)
    }
  }


  return (
    <>
      <li onClick={handleClick} style={completed ? {color: 'green'} : {color: 'red'}}>{name}</li>
    </>
  );
}

export default Task;