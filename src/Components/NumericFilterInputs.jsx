import React, { useContext } from 'react';
import Context from '../Context';

function NumericFilterInputs() {
  const { useSelectedInput, setSelectedInput,
    setFilters, useColumnOptions } = useContext(Context);
  const { column, comparison, value } = useSelectedInput;

  const operatorOptions = ['more than', 'less than', 'equal to'];

  function getSelected({ target }) {
    setSelectedInput({ ...useSelectedInput, [target.name]: target.value });
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
            useColumnOptions.map((columsOp, index) => (
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
        <button
          type="button"
          onClick={ () => { setFilters({ column, comparison, value }); } }
          data-testid="button-filter"
        >
          FILTRAR
        </button>
      </form>
    </div>
  );
}

export default NumericFilterInputs;
