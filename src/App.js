import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './Components/Table';
import SearchElements from './Components/SearchElements';

function App() {
  return (
    <section className="App">
      <p>OMG</p>
      <Provider>
        <SearchElements />
        <Table />
      </Provider>
    </section>
  );
}

export default App;
