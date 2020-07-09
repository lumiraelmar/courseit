import React from 'react';
import Navbar from './components/Navbar/index';
import Info from './components/Info/index';
import Projects from './components/Projects/index';
import axios from 'axios'
import './App.css';
import './reset.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      bio: '',
      avatar: '',
      profileURL: ''
    }
  }

  async componentDidMount() {
    const getGithub = await axios('https://api.github.com/users/lumiraelmar');
    
    const { name, bio, avatar_url, url } = getGithub.data
    this.setState ({
      name: name,
      bio: bio,
      avatar: avatar_url,
      profileURL: url
    })
  }
  
  render() {
    const { name, bio, avatar, profileURL } = this.state
    return (
      <div className='wrapper'>
        <Navbar name={name} url={profileURL}/>
        <Info bio={bio} avatar={avatar}/>
        <Projects />
      </div>
    )
  }
}


export default App;
