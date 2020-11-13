import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button'
import './style.scss';

function Pokemon() {
  const lastPokemon = useSelector((state) => state.lastPokemon)
  const { login } = useSelector((state) => state.login)
  console.log(lastPokemon)

  // useEffect(() => {
  //   fetchData()
  // }, [])

  // async function fetchData() {
  //   const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
  //   const dataJson = await data.json()
  //   setData({
  //     name: dataJson.name,
  //     img: dataJson.sprites.front_default
  //   })
  // }

  return (
    login ?
    <div>
      <img src={lastPokemon.img} />
      <p>{lastPokemon.name}</p>
    </div>
    :
    <div>
      <p>No estas autorizado a entrar a esta pagina.</p>
      <Link to='/login'>
        <Button button='Log in' />
      </Link>
    </div>
  );
}

export default Pokemon;