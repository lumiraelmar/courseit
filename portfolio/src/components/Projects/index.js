import React from 'react';
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
    const getGithub = await fetch('https://api.github.com/users/lumiraelmar/repos');
    const getGithubJson = await getGithub.json();
    
    this.setState ({
      projects: getGithubJson
    })
  }
  render() {
    return (
      <div className='projectsWrapper'>
        <p className='projects'>Projects:</p>
        {this.state.projects.map((project, key) => {
          return (
            <Project key={key} project={project}/>
          )
        })}
      </div>
    )
  }
}

export default Projects