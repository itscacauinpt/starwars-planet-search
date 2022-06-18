import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Context from '.';
import PlanetsAPI from '../Services/PlanetsAPI';

const INITIAL_FITERS_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'population', sort: 'ASC' },
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
  const [useColumnOptions, setColumnOptions] = useState(COLUMN_OPTIONS);
  const [useSelectedFilter, setSelectedFilter] = useState(INITIAL_FITERS_STATE);

  async function GetPlanetsAPI() {
    const resp = await PlanetsAPI();
    setData(resp);
  }

  useEffect(() => {
    GetPlanetsAPI();
  }, []);

  function setOrderFilters(orderFilter) {
    setSelectedFilter({
      ...useSelectedFilter,
      order: { column: orderFilter.column, sort: orderFilter.sort },
    });
  }

  function setFilters(numericFilter) {
    setSelectedFilter({
      ...useSelectedFilter,
      filterByNumericValues:
      [...useSelectedFilter.filterByNumericValues, numericFilter],
    });

    setColumnOptions(useColumnOptions
      .filter((selectedColumn) => selectedColumn !== numericFilter.column));

    setSelectedInput(useSelectedInput);
  }

  function deleteFilters(numericFilterColumn) {
    console.log('clica e deletela');
    const { filterByNumericValues } = useSelectedFilter;

    const numericValuesFiltered = filterByNumericValues
      .filter(({ column }) => column !== numericFilterColumn);

    setSelectedFilter({
      ...useSelectedFilter,
      filterByNumericValues: numericValuesFiltered,
    });

    setColumnOptions([...useColumnOptions, numericFilterColumn]);
  }

  function deleteAllFilters() {
    setSelectedFilter({
      ...useSelectedFilter,
      filterByNumericValues: [],
    });

    setColumnOptions(COLUMN_OPTIONS);
  }

  function NameFilter(results, nameSearched) {
    return results.filter(({ name: planetName }) => (
      planetName.toLowerCase().includes(nameSearched.toLowerCase())
    ));
  }

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

  function OrderFilter(results, orderSelected) {
    console.log(results.sort((a, b) => a.population - b.population));
    console.log(orderSelected);
    // socorro
    return results.sort();
  }

  useEffect(() => {
    if (data.results) {
      const { results } = data;

      let appliedFilters = [...results];

      const { filterByName, filterByNumericValues, order } = useSelectedFilter;

      appliedFilters = NumericFilter(appliedFilters, filterByNumericValues);
      appliedFilters = NameFilter(appliedFilters, filterByName.name);
      appliedFilters = OrderFilter(appliedFilters, order);

      setPlanets(appliedFilters);
    }
  }, [data, useSelectedFilter]);

  const contextState = {
    usePlanets,
    setFilters,
    deleteFilters,
    setOrderFilters,
    deleteAllFilters,
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

// https://www.youtube.com/watch?v=nyg5Lpl6AiM&ab_channel=DevEd
// https://www.youtube.com/watch?v=xRBE4iKX0yw&ab_channel=CodeWithVishal *** sort and comparing with a comparison table
// https://www.youtube.com/watch?v=d1r0aK5awWk&t=668s&ab_channel=DevmentorLive
