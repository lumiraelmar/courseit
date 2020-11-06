import Task from '../Task'

function Tasks({tasks}) {
  return (
    tasks &&
    <ul id='tasks'>
      {tasks.map((task, key) => {
        return (
          <Task task={task} key={key}/>
        )
      })}
    </ul>
  );
}

export default Tasks;