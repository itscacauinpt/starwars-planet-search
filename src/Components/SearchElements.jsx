import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../Context';

function SearchElements() {
  const { useSearchFilter, searchByName } = useContext(Context);
  const { filterByName } = useSearchFilter;

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="Search..."
        type="text"
        value={ filterByName.name }
        onChange={ searchByName }
      />
    </div>
  );
}

SearchElements.propTypes = {
  dataBase: propTypes.arrayOf,
}.isRequired;

export default SearchElements;
