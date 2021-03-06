import React, { useEffect } from 'react';
import Provider from './Context/Provider';
import './CSS/App.css';
import Table from './Components/Table';
import projectIntro from './Images/projectIntro.gif';
import projectScroll from './Images/projectScroll.png';
import Filters from './Components/Filters';
import setScrollBarTime from './Services/sideFunctions';

function App() {
  useEffect(() => {
    setScrollBarTime();
  }, []);

  const hiddenElement = { visibility: 'hidden' };

  return (
    <section className="App">
      <div className="App-header">
        <img
          id="starIntro"
          src={ projectIntro }
          alt="StarWarsIntro"
        />
        <img
          id="scroll"
          alt="scroll down"
          src={ projectScroll }
          style={ hiddenElement }
        />
      </div>
      <Provider>
        <Filters />
        <Table />
      </Provider>
      <p>
        by
        {' '}
        <a target="_blank" href="https://github.com/itscacauinpt" rel="noreferrer">Cacau</a>
        {' '}
        -
        {' '}
        <a target="_blank" href="https://www.betrybe.com/" rel="noreferrer">Trybe</a>
        {' '}
        Project
      </p>
    </section>
  );
}

export default App;
