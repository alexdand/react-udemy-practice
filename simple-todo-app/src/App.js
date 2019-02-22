import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      tempTask: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  saveTask() {
    this.setState({
      tasks: [this.state.tasks, this.state.tempTask],
      tempTask: ""
    });
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <div className="form">
          <input
            name="tempTask"
            className="input"
            placeholder="What needs to be done?"
            value={this.state.tempTask}
            onChange={this.onFieldChange}
          />
          <button onClick={this.saveTask}>SAVE</button>
        </div>
        <ul>
          {this.state.tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
