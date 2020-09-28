import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/localStorage'
import { useValidation } from '../../hooks/validation'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

function AddStartup() {
  const [inputs, setInputs] = useState([]);
  const requiredFields = ['name', 'logo', 'mail', 'desc'];
  const errors = useValidation(inputs, requiredFields);
  const [getter, handleSave] = useLocalStorage();
  
  function handleCallback(e) {
    const { value, name } = e.target;
    setInputs({...inputs, [name]: value})
  }

  function addStartup() {
     if (errors.length == 0) {
       console.log('formulario valido')
       handleSave(inputs)
     } else {
       console.log(`formulario truch0, te falta: ${errors}`)
     }
  }

  return (
    <div>
      <TextInput name='name' label='Name' type='text' placeholder='Name' onChange={handleCallback} />
      <TextInput name='logo' label='Logo' type='img' placeholder='Link an image' onChange={handleCallback}/>
      <TextInput name='mail' label='Mail' type='email' placeholder='Mail' onChange={handleCallback}/>
      <TextInput name='desc' label='Description' type='text' placeholder='Description' onChange={handleCallback}/>
      <TextInput name='web' label='Web' type='text' placeholder='Web(optional)' onChange={handleCallback}/>
      <TextInput name='twitter' label='Twitter' type='text' placeholder='Twitter(optional)' onChange={handleCallback}/>
      <TextInput name='instagram' label='Instagram' type='text' placeholder='Instagram(optional)' onChange={handleCallback}/>
      <Button label='Agregar Startup' onClick={addStartup}/>
    </div>
  );
}

export default AddStartup;