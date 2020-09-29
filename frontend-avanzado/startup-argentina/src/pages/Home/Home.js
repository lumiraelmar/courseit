import React, { useState } from 'react';
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

function Home() {
  const [inputValue, setInputValue] = useState('')
  const [newValue, setNewValue] = useState('')

  function save() {
    localStorage.setItem('inputValue', inputValue)
  }
  function read() {
    const hola = localStorage.getItem('inputValue')
    setNewValue(hola)
  }
  function erase() {
    localStorage.clear()
    setNewValue('')
  }

  return (
    <div>
      <TextInput name='name' label='Name' type='text' placeholder='Name' onChange={(e) => setInputValue(e.target.value)} />
      <Button label='Guardar' onClick={save}/>
      <Button label='Leer' onClick={read}/>
      <Button label='Borrar' onClick={erase}/>
      <p>El valor de localStorage es: {newValue}</p>
    </div>
  );
}

export default Home;