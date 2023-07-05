import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {setPokeData(response.data.results)})
  }, []);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <ul>
      {pokeData.map((pokemon, index) => (
        <li key={index}>
          {pokemon.name}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
