import React from "react";
export default class ClassProjet extends React.Component {
  render() {
    console.warn(this.props);
    return (
      <div style={{ backgroundColor: "blue", margin: "20px" }}>
        <h1>Class Components Projets</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
      </div>
    );
  }
}
