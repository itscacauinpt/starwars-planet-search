import React, { useContext } from 'react';
import Context from '../Context';

function FilterInputs() {
  const { useSelectedInput, getSelected,
    setFilters, deleteAllFilters, useColumnOptions } = useContext(Context);
  const { column, comparison, value } = useSelectedInput;

  const operatorOptions = ['maior que', 'menor que', 'igual a'];

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
            useColumnOptions.map((columsOp) => (
              <option key={ columsOp } value={ columsOp }>{ columsOp }</option>
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
            operatorOptions.map((operatorOp) => (
              <option key={ operatorOp } value={ operatorOp }>{ operatorOp }</option>
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
        <button
          type="button"
          onClick={ () => { setFilters({ column, comparison, value }); } }
          data-testid="button-filter"
        >
          FILTRAR
        </button>
        <button
          type="button"
          onClick={ () => { deleteAllFilters(); } }
          data-testid="button-remove-filters"
        >
          lixeirazinhaTudo
        </button>
      </form>
    </div>
  );
}

export default FilterInputs;
