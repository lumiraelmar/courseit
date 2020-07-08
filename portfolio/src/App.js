import React from 'react';
import Navbar from './components/Navbar/index';
import Projects from './components/Projects/index';
import './App.css';
import './reset.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  async componentDidMount() {
    const getGithub = await fetch('https://api.github.com/users/lumiraelmar');
    const getGithubJson = await getGithub.json();
    
    this.setState ({
      data: getGithubJson
    })
  }
  
  render() {
    const { name, avatar_url, bio, url } = this.state.data
    return (
      <div className='wrapper'>
        <Navbar name={name} url={url}/>
        <img className='img' src={avatar_url}></img>
        <p className='bio'>{bio}</p>
        <Projects />
      </div>
    )
  }
}


export default App;
