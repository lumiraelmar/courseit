import React from 'react';
import '../Project/style.css'

class Project extends React.Component {
  render() {
    const { name, html_url } = this.props.project
    return (
      <React.Fragment>
        <a className='repoLink' href={html_url}><p className='repoName'>{name}</p></a>
      </React.Fragment>
    )
  }
}

export default Project