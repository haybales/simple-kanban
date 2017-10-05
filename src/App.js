import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
    this.moveTask = this.moveTask.bind(this);

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

  moveTask(taskName, index, direction){
    console.log(taskName+" "+index+" "+direction);
    var newSource = [];
    if(index===1){
      console.log(1);
      newSource=this.state.working.filter((item)=>{
        return item!==taskName;
      });
      if(direction==="left"){
        this.setState({todo: this.state.todo.concat(taskName), working: newSource});
      }else{
        this.setState({complete: this.state.complete.concat(taskName), working: newSource});
      }
    }else{
      console.log(2);
      if(index===0 && direction==="right"){
        console.log(3);
        newSource=this.state.todo.filter((item)=>{
          return item!==taskName;
        });
        this.setState({todo: newSource, working: this.state.working.concat(taskName)});
      }else if(index===2 && direction==="left"){
        console.log(4);
        newSource=this.state.complete.filter((item)=>{
          return item!==taskName;
        });
        this.setState({complete: newSource, working: this.state.working.concat(taskName)});
      }else{
        console.log(5);
        if(index===0){
          console.log(6);
          newSource=this.state.todo.filter((item)=>{
            return item!==taskName;
          });
          this.setState({todo: newSource});
        }else{
          newSource=this.state.complete.filter((item)=>{
            return item!==taskName;
          });
          this.setState({complete: newSource});
        }
      }
    }
  }


  render() {
    return (
      <div className="container">
        <div className="header"><h1>Kanban</h1></div>
        <Form addTask={this.addTask} />

        <div className="flex-container">
          <TaskList title="To-Do" index={0} list={this.state.todo} moveTask={this.moveTask} />
          <TaskList title="Working" index={1} list={this.state.working} moveTask={this.moveTask} />
          <TaskList title="Complete" index={2} list={this.state.complete} moveTask={this.moveTask} />
        </div>
      </div>
    );
  }
}

export default App;
