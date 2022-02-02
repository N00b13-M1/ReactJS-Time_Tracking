import React, { Component } from 'react'
import Body from './components/Body';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App m-5">
        <header className="App-header">
          <Body />
        </header>
      </div>
    );
  }
}

export default App;
