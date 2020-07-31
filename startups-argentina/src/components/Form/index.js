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
      estaOK: '',
      showMessage: false
    }
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    const { name, logo, email, description } = this.state;
    const isValid = name && email && logo && description ? true : false;
    
    this.setState({
      estaOK: isValid,
      showMessage: true
    })

    if (isValid) {
      localStorage.setItem([name],JSON.stringify(this.state));
      /*const oldStartups = localStorage.getItem('startups')
      
      if (oldStartups){
        const parsedOldStartups = JSON.parse(oldStartups)
        parsedOldStartups.push({
          name,
          email,
          logo,
          desc
        })

        const newStartups = JSON.stringify(parsedOldStartups)
        localStorage.setItem('startups', newStartups)
      } else {
        const startups = []
        startups.push({
          name,
          email,
          logo,
          desc
        })
        const startupsToString = JSON.stringify(startups);
        localStorage.setItem('startups', startupsToString);*/

    }
  }

  render() {
    const { estaOK, showMessage } = this.state
    return (
      <div className='formWrapper'>
        {showMessage && (
          <p>{estaOK ? "Todo salio bien" : "Todo salio mal"}</p>
        )}
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
      </div>
    )
  }
}

export default Form;