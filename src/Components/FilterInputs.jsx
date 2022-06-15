import React, { useContext, useState } from 'react';
import Context from '../Context';

function FilterInputs() {
  const [useSelected, setSelected] = useState({
    column: 'population', comparison: 'maior que', value: '0',
  });
  const { column, comparison, value } = useSelected;
  const { useSelectedFilter, setSelectedFilter } = useContext(Context);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const operatorOptions = ['maior que', 'menor que', 'igual a'];

  function getSelected({ target }) {
    console.log(target);
    setSelected({
      ...useSelected,
      [target.name]: target.value,
    });
  }

  function setFilters(event) {
    console.log('clica e salva');
    event.preventDefault();

    setSelectedFilter({
      ...useSelectedFilter,
      filterByNumericValues: [...useSelectedFilter.filterByNumericValues, useSelected],
    });
    setSelected({
      column: 'population', comparison: 'maior que', value: '0',
    });
  }

  return (
    <div>
      <form>
        <select
          onChange={ getSelected }
          value={ column }
          name="column"
          data-testid="column-filter"
        >
          {
            columnOptions.map((columsOp, index) => (
              <option key={ index } value={ columsOp }>{ columsOp }</option>
            ))
          }
        </select>
        <select
          onChange={ getSelected }
          value={ comparison }
          name="comparison"
          data-testid="comparison-filter"
        >
          {
            operatorOptions.map((operatorOp, index) => (
              <option key={ index } value={ operatorOp }>{ operatorOp }</option>
            ))
          }
        </select>
        <input
          type="number"
          value={ value }
          name="value"
          onChange={ getSelected }
          data-testid="value-filter"
        />
        <input
          type="submit"
          value="FILTRAR"
          onClick={ setFilters }
          data-testid="button-filter"
        />
      </form>
    </div>
  );
}

export default FilterInputs;
