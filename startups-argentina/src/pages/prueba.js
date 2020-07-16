import React from 'react'
import { Link } from 'react-router-dom'

class Prueba extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Soy una prueba</p>
        <Link to='/'>Ir a la home</Link>
      </React.Fragment>
    )
  }
}

export default Prueba;