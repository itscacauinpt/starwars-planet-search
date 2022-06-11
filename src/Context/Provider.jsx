import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';

function TableProvider({ children }) {
  const [usePlanets, setPlanets] = useState([]);
  const [useSearchValue, setSearchFilter] = useState('');

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await (await fetch(url)).json();
      setPlanets(results);
    };
    getPlanets();
  }, []);

  function handleSearchChanger(e) {
    setSearchFilter(e.target.value);
  }

  const contextState = {
    usePlanets,
    useSearchValue,
    handleSearchChanger,
  };

  return (
    <Context.Provider value={ contextState }>
      { children }
    </Context.Provider>
  );
}

TableProvider.propTypes = {
  children: propTypes.node,
}.isRequired;

export default TableProvider;
