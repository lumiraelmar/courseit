import React from 'react';
import axios from 'axios'
import Project from '../Project/index'
import '../Projects/style.css'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    const getRepos = await axios('https://api.github.com/users/lumiraelmar/repos');
    
    this.setState ({
      projects: getRepos.data
    })
  }
  render() {
    const { projects } = this.state
    return (
      <div className='projectsWrapper'>
        <p className='projects'>Projects:</p>
        {projects.map((project, key) => {
          return (
            <Project key={key} project={project}/>
          )
        })}
      </div>
    )
  }
}

export default Projects