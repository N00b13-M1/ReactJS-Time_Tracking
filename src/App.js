import React, { Component } from 'react'
import Body from './components/Body';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App p-5 mx-auto my-auto">
        <header className="App-header px-auto py-auto">
          <Body />
        </header>
      </div>
    );
  }
}

export default App;
