import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

  constructor(props){
    super(props);

  }


  render(){
    return(
      <li><button>&lt;</button>{this.props.taskName}<button>&gt;</button></li>
    );
  }

}

Task.PropTypes = {
  taskName: PropTypes.string,
  key: PropTypes.number
}

export default Task;
