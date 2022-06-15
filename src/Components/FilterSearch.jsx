import React, { useContext } from 'react';
import Context from '../Context';

function FilterSearch() {
  const { useSelectedFilter, setSelectedFilter } = useContext(Context);
  const { filterByName: { name } } = useSelectedFilter;

  function searchByName({ target }) {
    setSelectedFilter({
      ...useSelectedFilter,
      filterByName: { ...useSelectedFilter.filterByName, name: target.value },
    });
  }

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Search..."
        type="text"
        value={ name }
        onChange={ searchByName }
      />
    </div>
  );
}

export default FilterSearch;
