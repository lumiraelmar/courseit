import React from 'react';
import '../Form/style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      logo: '',
      email: '',
      description: '',
      web: '',
      twitter: '',
      instagram: '',
      result: ''
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    this.setState({
      result: ''
    })
  }

  render() {
    
    return (
      <div className='formWrapper'>
        <form id='form'>
          <input name='name' onChange={(e) => this.handleChange(e)} className='inputForm' type='' placeholder='Nombre'></input>
          <input name='logo' onChange={(e) => this.handleChange(e)} className='inputForm' type='text' placeholder='Logo'></input>
          <input name='email' onChange={(e) => this.handleChange(e)} className='inputForm' type='email' placeholder='Mail'></input>
          <textarea name='description' onChange={(e) => this.handleChange(e)} className='inputForm' type='text' placeholder='Descripcion' form='form'></textarea>
          <input name='web' onChange={(e) => this.handleChange(e)} className='inputForm' type='text' placeholder='Web (optional)'></input>
          <input name='twitter' onChange={(e) => this.handleChange(e)} className='inputForm' type='text' placeholder='Twitter (optional)'></input>
          <input name='instagram' onChange={(e) => this.handleChange(e)} className='inputForm' type='text' placeholder='Instagram (optional)'></input>
          <button onClick={() => this.handleClick()} className='buttonForm'>Submit</button>
          {/*{Object.keys(this.state).map((result) => {
            return (
              <p>{this.state[result]}</p>
            )
          })}*/}
        </form>
      </div>
    )
  }
}

export default Form;