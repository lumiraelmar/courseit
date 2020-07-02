import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      tasks: []
    }
  }
    handleChange(e) {
      const { value } = e.target
      this.setState({
        inputValue: value
      })
    }

    handleClick() {
      //Leemos la propiedad inputValue de nuestro estado
      const newValue = this.state.inputValue
      //Leer la propiedad tasks de nuestro estado
      const newTasks = this.state.tasks
      //Agregarle a ese array un nuevo item con el valor de inputValue
      newTasks.push(newValue)   
      //Actualizar el estado tasks con el nuevo array
      this.setState({
        tasks: newTasks,
        inputValue: ''
      })
    }
  render() {
    const { tasks, inputValue } = this.state
    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e)} type='text' value={inputValue}/>
        <button onClick={() => this.handleClick()}>Click</button>
        <ul>
          {tasks.map((task, key) => {
            return(
              <li key={key} task={task}>{task}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}
export default App;
