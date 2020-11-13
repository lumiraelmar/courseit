import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { addLastPokemon } from '../../store'
import './style.scss';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

function Home() {
  const { login } = useSelector((state) => state.login)
  const dispatch = useDispatch();
  const [pokemonNumber, setPokemonNumber] = useState(0)
  const history = useHistory();

  function handleChange(name, value) {
    setPokemonNumber(value)
  }

  async function handleClick() {
  if (pokemonNumber > 0) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    const dataJson = await data.json()
    dispatch(addLastPokemon({
      name: dataJson.name,
      img: dataJson.sprites.front_default
    }))
  }
  history.push('/pokemon');
}

  return (
    login ?
    <div>
      <Input placeholder='Escribir numero de Pokemon' onChange={handleChange}/>
      <Button name='pokemon' button='Buscar' onClick={handleClick}/>
    </div>
    :
    <>
      <p>No estas autorizado a entrar a esta pagina.</p>
      <Link to='/login'>
        <Button button='Log in' />
      </Link>
    </>
  );
}

export default Home;