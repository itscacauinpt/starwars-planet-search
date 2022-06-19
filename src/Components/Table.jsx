import React, { useContext } from 'react';
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
              usePlanets[0] && colums
                .map((heading, index) => <th key={ index }>{ heading }</th>)
            }
          </tr>
        </thead>
        <tbody>
          {
            usePlanets.map((row, indexRow) => (
              <tr key={ indexRow }>
                {
                  colums.map((column, indexColumn) => (
                    <td
                      data-testid={ indexColumn === 0 ? 'planet-name' : 'info' }
                      key={ indexColumn }
                    >
                      {row[column]}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
