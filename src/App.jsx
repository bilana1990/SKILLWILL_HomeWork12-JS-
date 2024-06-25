
import './App.css';

import React, { Component } from 'react';

class App extends Component {
  state = {
    name: "",
    user: [{ id: 1, name: "first task" }]
  }

  onChange(event) {
    let value = event.target.value;
    this.setState({
      name: value
    });
  }

  onSubmit() {
    // აქ შეგიძლიათ დაამატოთ ლოგიკა, რომ ახალი task დაემატოს user სიაში
    this.setState({
      user: [...this.state.user, { id: this.state.user.length + 1, name: this.state.name }],
      name: ""
    });
  }

  onReset() {
    this.setState({
      name: ""
    });
  }

  render() {
    return (
      <div className="all-tasks">
        <h1>To Do List:</h1>
        <div className="task-to-be-performed">
          <h2>task to be performed</h2>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <button id="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
        </div>

        <div className="Task-done">
          <h2>Task done</h2>
          <p>{this.state.name}</p>
          <button id="reset" onClick={this.onReset.bind(this)}>reset</button>
        </div>
      </div>
    );
  }
}

export default App;

                  
      
    
    
