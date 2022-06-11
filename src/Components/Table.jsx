import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../Context';

function Table() {
  const dataBase = useContext(Context);
  const data = dataBase.usePlanets;
  const filtered = dataBase.useSearchValue;
  const collums = data[0] && Object.keys(data[0]);
  // console.log(data.map((row) => (collums.map((collum) => row[collum]))));

  const dataFiltered = data.filter((val) => {
    if (filtered === '') {
      return val;
    }
    if (val.name.toLowerCase().includes(filtered.toLowerCase())) {
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
              data[0] && collums.map((heading, i) => <th key={ i }>{ heading }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            dataFiltered.map((row, i) => (
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
  dataBase: propTypes.arrayOf,
}.isRequired;

export default Table;
