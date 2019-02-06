import React, { Component } from "react";
import logo from "./logo.svg";
import {Button, Row, Col} from 'antd'
import "./App.css";



function App(props) {

  return(<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Electron <code>src/App.js</code> log explorer.
    </p>

    <Button type='primary'>
      Click me!
    </Button>

  </header>
</div>);
}


export default App;
