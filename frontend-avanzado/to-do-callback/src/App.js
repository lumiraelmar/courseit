import React from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: []
    }
  }

  handleCallback(inputValue) {
    const { tasks } = this.state
    this.setState({
      //trae el array tasks y agrega inputValue
      tasks: [...tasks, inputValue]
    })
  }

  render() {
    const { tasks } = this.state
    return (
      <>
        <AddTask handleCallback={(inputValue) => this.handleCallback(inputValue)}/>
        <Tasks tasks={tasks}/>
      </>
    );
  }
}

export default App;