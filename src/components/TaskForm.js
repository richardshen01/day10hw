import React, { Component } from 'react'

import './TaskForm.css';

export default class TaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  onNameChanged(e){
    this.setState({
      name: e.target.value
    })
  }

  addTask() {
    e.preventDefault();

    this.props.createTask(this.state.name);

    this.setState({
      name:''
    })
  }

  render() {
    return (
      <div className="task-form">
        <form onSubmit={(e) => this.addTask(e)}>
          
          <div className="input-group mb-3">
            <input onChange={(e) => this.onNameChanged(e)}
            value={this.state.name}
            type="text"
            className="form-control"
            placeholder="Task" />
            <button onClick="" className="btn btn-outline-secondary" type="submit">
              +
            </button>
          </div>

        </form>
      </div>
    )
  }
}
