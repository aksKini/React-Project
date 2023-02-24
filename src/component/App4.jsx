import React, { Component } from "react";

export default class App4 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  IncrementeventHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
    document.title = `You clicked ${this.state.count + 1} times`;
  };

  DecrementeventHandler = () => {
    this.setState({
      count: this.state.count - 1,
    });
    document.title = `You clicked ${this.state.count - 1} times`;
  };

  RESETeventHandler = () => {
    this.setState({
      count: 0,
    });
    document.title = `You clicked 0 times`;
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Score Generator</h2>
        </div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.IncrementeventHandler} className={"button1"}>
            + Increment
          </button>
          <button onClick={this.DecrementeventHandler} className={"button2"}>
            - Decrement
          </button>
          <button onClick={this.RESETeventHandler} className={"button3"}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}
