import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header"><h1>Kanban</h1></div>
        <form>
          <input type="text" value="" placeholder="enter a new task..." />
          <input type="submit" value="submit" />
        </form>

        <div className="flex-container">
          <div className="to-do">
            <h2>To-Do</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task 2<button>&gt;</button></li>
            </ul>
          </div>

          <div className="working">
            <h2>Working</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task 2<button>&gt;</button></li>
            </ul>
          </div>

          <div className="complete">
            <h2>Complete</h2>
            <ul>
              <li><button>&lt;</button>Task 1<button>&gt;</button></li>
              <li><button>&lt;</button>Task 2<button>&gt;</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
