import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

  move(direction){
    this.props.moveTask(this.props.taskName, this.props.listIndex, direction);
  }


  render(){
    return(
      <li><button onClick={()=>{this.move("left")}}>&lt;</button>
      {this.props.taskName}
      <button onClick={()=>{this.move("right")}}>&gt;</button></li>
    );
  }

}

Task.PropTypes = {
  taskName: PropTypes.string,
  listIndex: PropTypes.number,
  moveTask: PropTypes.func
}

export default Task;
