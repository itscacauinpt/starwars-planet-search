import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../Context';

function SearchElements() {
  const dataBase = useContext(Context);
  const data = dataBase.useSearchValue;
  const handler = dataBase.handleSearchChanger;

  return (
    <div>
      <input placeholder="Search..." type="text" value={ data } onChange={ handler } />
    </div>
  );
}

SearchElements.propTypes = {
  dataBase: propTypes.arrayOf,
}.isRequired;

export default SearchElements;
