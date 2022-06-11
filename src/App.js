import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './Components/Table';
import SearchElements from './Components/SearchElements';
// import StarWars from '../projectIntro.gif';
// TODO: gif dentro de src/

function App() {
  return (
    <section className="App">
      {/* <img src={ StarWars } alt="StarWarsIntro" /> */}
      <Provider>
        <SearchElements />
        <Table />
      </Provider>
    </section>
  );
}

export default App;
