import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';
import PlanetsAPI from '../Services/PlanetsAPI';

const INITIAL_FITERS_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
};

const INPUT_STATE = {
  column: 'population',
  comparison: 'maior que',
  value: '0',
};

const COLUMN_OPTIONS = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function TableProvider({ children }) {
  const [data, setData] = useState({});
  const [usePlanets, setPlanets] = useState([]);
  const [useSelectedInput, setSelectedInput] = useState(INPUT_STATE);
  const [useColumnOptions] = useState(COLUMN_OPTIONS);
  // setColumnOptions
  const [useSelectedFilter, setSelectedFilter] = useState(INITIAL_FITERS_STATE);

  async function GetPlanetsAPI() {
    const resp = await PlanetsAPI();
    setData(resp);
  }

  function NameFilter(results, nameSearched) {
    return results.filter(({ name: planetName }) => (
      planetName.toLowerCase().includes(nameSearched.toLowerCase())
    ));
  }

  // https://www.youtube.com/watch?v=nyg5Lpl6AiM&ab_channel=DevEd
  // https://www.youtube.com/watch?v=xRBE4iKX0yw&ab_channel=CodeWithVishal *** sort and comparing with a comparison table
  // https://www.youtube.com/watch?v=d1r0aK5awWk&t=668s&ab_channel=DevmentorLive

  function NumericFilter(results, inputSelected) {
    let appliedFilters = [...results];

    const comparing = {
      'maior que': (columnInput, comparisonInput) => columnInput > comparisonInput,
      'menor que': (columnInput, comparisonInput) => columnInput < comparisonInput,
      'igual a': (columnInput, comparisonInput) => columnInput === comparisonInput,
    };

    inputSelected.forEach(({ column, comparison, value }) => {
      appliedFilters = appliedFilters.filter((eachPlanet) => {
        const columnInput = Number(eachPlanet[column]);
        const comparisonInput = Number(value);
        return comparing[comparison](columnInput, comparisonInput);
      });
    });

    return appliedFilters;
  }

  // function columnOptions() {
  //   let theColumn = [...COLUMN_OPTIONS];

  // }

  function deleteFilters(index) {
    console.log('clica e deletela');
    const { filterByNumericValues } = useSelectedFilter;

    setSelectedFilter({
      ...useSelectedFilter,
      filterByNumericValues: filterByNumericValues
        .filter((_ele, eleIndex) => eleIndex !== index) });
  }

  useEffect(() => {
    GetPlanetsAPI();
  }, []);

  useEffect(() => {
    if (data.results) {
      const { results } = data;
      let appliedFilters = [...results];
      const { filterByName, filterByNumericValues } = useSelectedFilter;
      appliedFilters = NameFilter(appliedFilters, filterByName.name);
      appliedFilters = NumericFilter(appliedFilters, filterByNumericValues);
      setPlanets(appliedFilters);
    }
  }, [data, useSelectedFilter]);

  const contextState = {
    usePlanets,
    deleteFilters,
    useColumnOptions,
    useSelectedInput,
    setSelectedInput,
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
