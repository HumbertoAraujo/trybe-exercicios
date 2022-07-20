import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <main className="container">
        <h1>Pokedex</h1>
        <Pokedex pokemons={pokemons}/>        
      </main>
    );
  }
}

export default App;
