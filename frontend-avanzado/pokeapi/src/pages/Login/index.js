import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { addLogin } from '../../store'
import './style.scss';
import {useHistory} from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState({});

  function handleChange(name, value) {
    setUserData({
      ...userData,
      [name]: value
    })
  }

  function handleClick() {
    const correctUser = 'lucia'
    const correctPass = 'mira'
    const {username, password} = userData

    if (username == correctUser && password == correctPass) {
      dispatch(addLogin(true))
      history.push('/');
    } else {
      console.log('error login')
      dispatch(addLogin(false))
    }
  }

  return (
    <div>
      <Input name='username' label='Usuario' onChange={handleChange} type='text'/>
      <Input name='password' label='Contraseña' onChange={handleChange} type='text'/>
      <Button button='Ingresar' onClick={handleClick}/>
    </div>
  );
}

export default Login;