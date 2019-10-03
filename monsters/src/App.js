import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import styled from 'styled-components'
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: ''
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
        <input type='search' placeholder='Search Character' onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))}/>
        <CharacterList characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
