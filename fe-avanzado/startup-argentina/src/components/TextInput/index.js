import React from 'react';

function TextInput(props) {
  const { name, placeholder } = props
  function handleChange(e) {
    const { name, value } = e.target
    props.handleCallback(name, value)
  }
  return (
    <form>
      <label>{name}</label>
      <input name={name} type='text' placeholder={placeholder} onChange={handleChange}/>
    </form>
  )
}
export default TextInput