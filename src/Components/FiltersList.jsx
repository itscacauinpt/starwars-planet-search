import React, { useContext } from 'react';
import Context from '../Context';

function Filters() {
  const { useSelectedFilter: { filterByNumericValues },
    deleteFilters, deleteAllFilters } = useContext(Context);

  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter">
            <p>{column}</p>
            <p>{comparison}</p>
            <p>{value}</p>
            <button
              type="button"
              onClick={ () => { deleteFilters(column); } }
            >
              remove
            </button>
          </div>
        ))
      }
      <button
        type="button"
        onClick={ () => { deleteAllFilters(); } }
        data-testid="button-remove-filters"
      >
        remove all
      </button>
    </div>
  );
}

export default Filters;
