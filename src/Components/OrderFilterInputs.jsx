import React, { useState, useContext } from 'react';
import Context from '../Context';

function OrderFilterInputs() {
  const [useSortOption, setSortOption] = useState({ column: 'population', sort: 'ASC' });
  const { setOrderFilters, COLUMN_OPTIONS } = useContext(Context);
  const { sort } = useSortOption;

  function setRadioOption({ target }) {
    setSortOption({ ...useSortOption, sort: target.value });
  }

  function setColumnOption({ target }) {
    setSortOption({ ...useSortOption, column: target.value });
  }

  return (
    <div>
      <form>
        <select
          name="column"
          data-testid="column-sort"
          onChange={ setColumnOption }
        >
          {
            COLUMN_OPTIONS.map((columsOp, index) => (
              <option key={ index } value={ columsOp }>{ columsOp }</option>
            ))
          }
        </select>
        <label htmlFor="ASC-ID">
          <input
            type="radio"
            name=""
            id="ASC-ID"
            value="ASC"
            checked={ sort === 'ASC' }
            data-testid="column-sort-input-asc"
            onChange={ setRadioOption }
          />
          ASCENDENTE
        </label>
        <label htmlFor="DESC-ID">
          <input
            type="radio"
            name=""
            id="DESC-ID"
            value="DESC"
            checked={ sort === 'DESC' }
            data-testid="column-sort-input-desc"
            onChange={ setRadioOption }
          />
          DESCENDENTE
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => { setOrderFilters(useSortOption); } }
        >
          ORDER
        </button>
      </form>
    </div>
  );
}

export default OrderFilterInputs;
