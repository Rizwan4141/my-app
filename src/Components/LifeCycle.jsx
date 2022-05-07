import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      counter: 0,
    };
    this.Add = () => this.setState({ counter: this.state.counter + 1 });
    this.Remove = () => this.setState({ counter: this.state.counter - 1 });
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Remove}>Remove</button>
        <h1>Counter:{this.state.counter}</h1>
      </div>
    );
  }
}

export default LifeCycle;

// rce
// rconst
