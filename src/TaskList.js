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
          {this.props.list.map(function(item, index){
            return(
              <Task taskName={item} key={index} />
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
  key: PropTypes.number
}

export default TaskList;
