import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);

    this.state = {
      todo: [],
      working: [],
      complete: []
    }
  }

  addTask(taskName){
    var newTodo = this.state.todo.concat(taskName);
    this.setState({todo: newTodo});
  }


  render() {
    return (
      <div className="container">
        <div className="header"><h1>Kanban</h1></div>
        <Form addTask={this.addTask} />

        <div className="flex-container">
          <TaskList title="To-Do" key="0" list={this.state.todo} />
          <TaskList title="Working" key="1" list={this.state.working} />
          <TaskList title="Complete" key="2" list={this.state.complete} />
        </div>
      </div>
    );
  }
}

export default App;
