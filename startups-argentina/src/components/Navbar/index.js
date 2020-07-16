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

  handleClick() {
    
  }

  render() {
    return (
      <div className='navWrapper'>
        <div className='titleInputWrapper'>
          <h1 className='titleNavbar'>Startup Argentina</h1>
          <input onChange={(e) => this.handleChange(e)} className='input' type='' placeholder='Busca Startup'></input>
        </div>
        <Link to='/form'><button onClick={() => this.handleClick()} className='button'>Agregar startup</button></Link>
      </div>
    )
  }
}

export default Navbar;