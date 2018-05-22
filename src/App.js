import React, { Component } from "react";
import "./App.css";
import Tickers from "./components/Tickers.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Cryptocurrency Ticker</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
