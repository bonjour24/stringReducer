import React, { Component } from "react";
import StringReducer from "./components/StringReducer";
import "./App.css";
import Decoder from "./components/Decoder";

class App extends Component {
  state = {
    checked: true,
  };

  handleChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container main text-left px-4">
          <h1>Invictus Assignment</h1>
          <div className="text-center mt-3">
            <label className="mx-2" htmlFor="method">Choose a method : </label>
            <input
              type="radio"
              id="male"
              value="encode"
              checked={this.state.checked}
              onChange={() => this.setState({ checked: !this.state.checked })}
            />
            <label className="mx-2" htmlFor="encode">Encode</label>
            <input
              type="radio"
              id="female"
              value="decode"
              checked={!this.state.checked}
              onChange={() => this.setState({ checked: !this.state.checked })}
            />
            <label htmlFor="decode">Decode</label>
          </div>
          {this.state.checked ? <StringReducer /> : <Decoder />}
        </div>
      </div>
    );
  }
}

export default App;
