import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';
import PlanetsAPI from '../Services/PlanetsAPI';

const INITIAL_FITERS_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

function TableProvider({ children }) {
  const [data, setData] = useState({});
  const [usePlanets, setPlanets] = useState([]);
  const [useSelectedFilter, setSelectedFilter] = useState(INITIAL_FITERS_STATE);

  async function GetPlanetsAPI() {
    const resp = await PlanetsAPI();
    setData(resp);
  }

  // const { filterByName: { name } } = useSelectedFilter;

  // const usePlanetsFiltered = usePlanets.filter((val) => {
  //   if (name === '') {
  //     return val;
  //   }
  //   if (val.name.toLowerCase().includes(name.toLowerCase())) {
  //     return val;
  //   }
  //   return '';
  // });

  function NameFilter(results, name) {
    return results.filter(({ name: nameSearched }) => (
      nameSearched.toLowerCase().includes(name.toLowerCase())
    ));
    // return arrayResults.filter((val) => {
    //   if (name === '') {
    //     return val;
    //   }
    //   if (val.name.toLowerCase().includes(name.toLowerCase())) {
    //     return val;
    //   }
    //   return '';
    // });
  }

  useEffect(() => {
    GetPlanetsAPI();
  }, []);

  useEffect(() => {
    // console.log(data);
    if (data.results) {
      const { results } = data;
      let appliedFilters = [...results];
      const { filterByName } = useSelectedFilter;
      appliedFilters = NameFilter(appliedFilters, filterByName.name);
      setPlanets(appliedFilters);
    }
  }, [data, useSelectedFilter]);

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
