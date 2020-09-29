import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Form'
import Navbar from '../../components/Navbar'

class FormPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Form />
        <Link to='/'>Ir a la home</Link>
      </React.Fragment>
    )
  }
}

export default FormPage;