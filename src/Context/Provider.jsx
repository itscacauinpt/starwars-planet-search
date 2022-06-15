import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';
import PlanetsAPI from '../Services/PlanetsAPI';

const INITIAL_FITERS_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function TableProvider({ children }) {
  const planetsAPI = PlanetsAPI();
  const [usePlanets, setPlanets] = useState([]);
  const [useSelectedFilter, setSelectedFilter] = useState(INITIAL_FITERS_STATE);

  useEffect(() => {
    setPlanets(planetsAPI);
  }, [planetsAPI]);

  const contextState = {
    usePlanets,
    useSelectedFilter,
    setSelectedFilter,
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
