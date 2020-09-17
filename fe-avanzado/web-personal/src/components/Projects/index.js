import React, { useContext } from 'react';
import Project from '../Project'
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Projects() {
  const info = useContext(AlgoContext);
  const { projects } = info
  return (
    <div className='projectsWrapper'>
      {projects.map((project, key) => {
        return (
          <Project project={project} key={key}/>
        )
      })}
    </div>
  );
}

export default Projects;