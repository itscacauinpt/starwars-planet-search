import React, { useContext } from 'react';
import Context from '../Context';

function Filters() {
  const { useSelectedFilter: { filterByNumericValues } } = useContext(Context);

  function handleFilters() {
    console.log('clica e deletela');
  }

  return (
    <div className="filter-list">
      {
        filterByNumericValues.map(({ column }) => (
          <div key={ column } data-testid="filter">
            <p>{column}</p>
            <button type="button" onClick={ handleFilters }>
              delete
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Filters;
