import { useState } from 'react'
import './App.css';
import Input from './components/Input'
import Button from './components/Button'
import Tasks from './components/Tasks'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([])

  function handleChange(e) {
    setInputValue(e.target.value)
  }

  function handleClick() {
    if (inputValue.length > 0) {
      setTasks(prevState => [...prevState, inputValue])
      setInputValue('')
    }
  }

  return (
    <div className="App">
      <Input onChange={handleChange} value={inputValue}/>
      <Button onClick={handleClick}/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
