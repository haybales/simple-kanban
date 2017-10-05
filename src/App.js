import React, { Component } from 'react';
import Form from './Form'

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
          <div className="list-box">
            <h2>To-Do</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task<button>&gt;</button></li>
            </ul>
          </div>

          <div className="list-box">
            <h2>Working</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task<button>&gt;</button></li>
            </ul>
          </div>

          <div className="list-box">
            <h2>Complete</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task<button>&gt;</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
