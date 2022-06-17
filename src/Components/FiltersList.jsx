import React, { useContext } from 'react';
import Context from '../Context';

function Filters() {
  const { useSelectedFilter: { filterByNumericValues },
    deleteFilters } = useContext(Context);

  return (
    <div className="filter-list">
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
              lixeirazinha
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Filters;
