// create your App component here
import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.JSON())
      .then(data => console.log(data));
  }
  render() {
    <div />;
  }
}

export default App;
