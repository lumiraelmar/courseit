import React from 'react';
import './style.scss';

function Project(props) {
  const { html_url, name } = props.project
  return (
    <div className='projectWrapper'>
      <a href={html_url} className='link'><p className='projectName'>{name}</p></a>

    </div>
  );
}

export default Project;