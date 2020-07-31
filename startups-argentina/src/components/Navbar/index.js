import React from 'react';
import '../Navbar/style.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
    this.props.handleCallback(this.state.value)
  }

  render() {
    const { showAutocomplete } = this.props
    return (
      <div className='navWrapper'>
        <div className='titleInputWrapper'>
          <Link to='/' ><h1 className='titleNavbar'>Startup Argentina</h1></Link>
          {showAutocomplete && (
            <input onChange={(e) => this.handleChange(e)} className='input' type='' placeholder='Busca Startup'></input>
          )}
        </div>
        <Link to='/form'><button className='button'>Agregar startup</button></Link>
      </div>
    )
  }
}

export default Navbar;