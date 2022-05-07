import React, { Component } from "react";

export class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rizwan",
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(Props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Class Comp</h1>
      </div>
    );
  }
}
export default Mounting;
