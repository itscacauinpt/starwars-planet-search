import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './Components/Table';
import star from './projectIntro.gif';
import Filters from './Components/Filters';

function App() {
  return (
    <section className="App">
      <img className="App-header" src={ star } alt="StarWarsIntro" />
      <Provider>
        <Filters />
        <Table />
      </Provider>
    </section>
  );
}

export default App;
