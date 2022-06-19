import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './Components/Table';
import FilterSearch from './Components/FilterSearch';
import NumericFilterInputs from './Components/NumericFilterInputs';
import FiltersList from './Components/FiltersList';
import OrderFilterInputs from './Components/OrderFilterInputs';
import star from './projectIntro.gif';

function App() {
  return (
    <section className="App">
      <img src={ star } alt="StarWarsIntro" />
      <Provider>
        <FilterSearch />
        <NumericFilterInputs />
        <OrderFilterInputs />
        <FiltersList />
        <Table />
      </Provider>
    </section>
  );
}

export default App;
