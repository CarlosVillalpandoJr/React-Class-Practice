import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import SearchBox from './components/SearchBox'
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

  handleChange = (e) => { 
    this.setState({ searchField: e.target.value }) // Automatically binds 'this' to where arrow function is defined (ES6)
  }                                               // Lexical Scoping, bind this context to where defined



  render() {
    const { characters, searchField } = this.state
    const filteredCharacters = characters.filter(char => 
      char.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1>Star Wars Characters</h1>
        <SearchBox placeholder='Search Characters' handleChange={this.handleChange}/>
        <CharacterList characters={filteredCharacters}/>
      </div>
    );
  }
}

export default App;
