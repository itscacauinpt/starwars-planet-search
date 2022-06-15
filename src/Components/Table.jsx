import React, { useContext } from 'react';
// import propTypes from 'prop-types';
import Context from '../Context';

function Table() {
  const { usePlanets } = useContext(Context);

  const colums = usePlanets[0] && (
    Object.keys(usePlanets[0]).filter((key) => key !== 'residents')
  );

  return (
    <div className="table-style">
      <table cellPadding={ 0 } cellSpacing={ 0 }>
        <thead>
          <tr>
            {
              usePlanets[0] && colums.map((heading, i) => <th key={ i }>{ heading }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            usePlanets.map((row, i) => (
              <tr key={ i }>
                {
                  colums.map((column, index) => <td key={ index }>{row[column]}</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

// Table.propTypes = {
//   usePlanetsBase: propTypes.arrayOf,
// }.isRequired;

export default Table;
