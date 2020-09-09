import React from 'react';
import Task from '../Task'

function Tasks(props) {
  const { tasks } = props
  function handleCallback(name) {
    if (handleCallback) {
      props.handleCallback(name)
    }
  }

  return (
    <>
    {tasks.map((task, key) =>{
        return (
          <ul>
            <Task handleCallback={handleCallback} name={task.value} completed={task.completed} key={key}/>
          </ul>
        )
      })}
    </>
  );
}

export default Tasks;