import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';
import PlanetsAPI from '../Services/PlanetsAPI';

// const INITIAL_FITERS_STATE = {
//   original: '',
//   filterByName: { name: '' },
// };

function TableProvider({ children }) {
  const planetsAPI = PlanetsAPI();
  const [usePlanets, setPlanets] = useState([]);
  const [useSearchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    setPlanets(planetsAPI);
  }, [planetsAPI]);

  function searchByName({ target }) {
    // setSearchFilter({
    //   ...useSearchFilter,
    //   filterByName: { ...useSearchFilter.filterByName, name: target.value },
    // });
    setSearchFilter(target.value);
  }

  const contextState = {
    usePlanets,
    useSearchFilter,
    searchByName,
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
