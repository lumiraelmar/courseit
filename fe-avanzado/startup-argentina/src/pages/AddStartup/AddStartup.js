import React, {useState} from 'react';
//import {useValidation} from './hooks/validation'
import TextInput from '../../components/TextInput'

function AddStartup() {
  //const [isValid, setIsValid] = useValidation
  const [input, setInput] = useState({})
  function handleCallback(name, value) {
    setInput(input => [
      ...input,
      {name: value}]
    ) 
  }

  console.log(input)
  function handleClick() {

  }
  
  return (
    <div>
      <TextInput name='Name' placeholder='Name' handleCallback={handleCallback} />
      <TextInput name='Logo' placeholder='Link an image' handleCallback={handleCallback}/>
      <TextInput name='Mail' placeholder='Mail' handleCallback={handleCallback}/>
      <label>Description</label>
      <textarea />
      <TextInput name='Web' placeholder='Web(optional)' handleCallback={handleCallback}/>
      <TextInput name='Twitter' placeholder='Twitter(optional)' handleCallback={handleCallback}/>
      <TextInput name='Instagram' placeholder='Instagram(optional)' handleCallback={handleCallback}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default AddStartup;