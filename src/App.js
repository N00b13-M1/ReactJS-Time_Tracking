import React, { Component } from 'react'
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header px-auto py-auto">
          <Body />
        </header>
      </div>
    );
  }
}

export default App;
