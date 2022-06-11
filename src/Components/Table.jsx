import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../Context';

function Table() {
  const { usePlanets, useSearchFilter } = useContext(Context);
  // const { original } = useSearchFilter;
  const collums = usePlanets[0] && (
    Object.keys(usePlanets[0]).filter((key) => key !== 'residents')
  );
  // console.log(usePlanets.map((row) => (collums.map((collum) => row[collum]))));

  const usePlanetsFiltered = usePlanets.filter((val) => {
    if (useSearchFilter === '') {
      return val;
    }
    if (val.name.toLowerCase().includes(useSearchFilter.toLowerCase())) {
      return val;
    }
    return '';
  });

  return (
    <div>
      <table cellPadding={ 0 } cellSpacing={ 0 }>
        <thead>
          <tr>
            {
              usePlanets[0] && collums.map((heading, i) => <th key={ i }>{ heading }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            usePlanetsFiltered.map((row, i) => (
              <tr key={ i }>
                {
                  collums.map((collumn, index) => <td key={ index }>{row[collumn]}</td>)
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  usePlanetsBase: propTypes.arrayOf,
}.isRequired;

export default Table;
