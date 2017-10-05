import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ""
    }
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if(this.state.value!==""){
      this.props.addTask(this.state.value);
      this.setState({value: ""});
    }
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} placeholder="enter a new task..." onChange={this.handleChange} />
        <input type="submit" value="submit" />
      </form>
    );
  }

}

Form.PropTypes = {
  addTask: PropTypes.func
}

export default Form;
