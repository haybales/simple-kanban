import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class TaskList extends Component {

  constructor(props){
    super(props);

  }


  render(){
    return(
      <div className="list-box">
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.list.map((item, index)=>{
            return(
              <Task taskName={item} key={index} listIndex={this.props.index} moveTask={this.props.moveTask} />
            );
          })}
        </ul>
      </div>
    );
  }

}

TaskList.PropTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  index: PropTypes.number,
  moveTask: PropTypes.func
}

export default TaskList;
