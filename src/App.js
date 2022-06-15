import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './Components/Table';
import FilterSearch from './Components/FilterSearch';
import FilterInputs from './Components/FilterInputs';
// import StarWars from '../projectIntro.gif';
// TODO: gif dentro de src/

function App() {
  return (
    <section className="App">
      {/* <img src={ StarWars } alt="StarWarsIntro" /> */}
      <Provider>
        <FilterSearch />
        <FilterInputs />
        <Table />
      </Provider>
    </section>
  );
}

export default App;
