import React from 'react';

function TextInput(props) {
  const { label, name, placeholder, type, onChange } = props

  return (
    <form>
      {label &&<label>{label}</label>}
      {name == 'desc' ? 
        <textarea 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}/> :
        <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}/>
      }
    </form>
  )
}
export default TextInput