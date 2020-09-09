import React, { useState, useEffect } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([])
  const [data, setData] = useState([])

  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/lumiraelmar");
    const getJson = await getData.json();
    setData(getJson.login)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleInputValue(inputValue) {
    setTasks(tasks => [
      ...tasks, 
      {value: inputValue, completed: false}])
  }

  function handleCallback(name) {
    const modifiedTasks = tasks.map((task) => {
      if (task.value == name) {
        return {
          value: task.value,
          completed: !task.completed
        }
      }
      return task
    })
    setTasks(modifiedTasks)
  }
  console.log(tasks)
  return (
    <div className="App">
      <AddTask handleCallback={handleInputValue}/>
      <Tasks handleCallback={handleCallback} tasks={tasks} />
      <p>Login: {data}</p>
    </div>
  );
}

export default App;
