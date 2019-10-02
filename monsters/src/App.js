import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(charactersResults => this.setState({ characters: charactersResults.results }))
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
