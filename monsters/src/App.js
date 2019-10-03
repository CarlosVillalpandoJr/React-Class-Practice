import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import styled from 'styled-components'
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
      <div className='App'>
        <h1>Star Wars Characters</h1>
        <CharacterList characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
