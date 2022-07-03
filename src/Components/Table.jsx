import React, { useContext } from 'react';
import Context from '../Context';
import '../CSS/Table.css';

function Table() {
  const { usePlanets } = useContext(Context);

  const colums = usePlanets[0] && (
    Object.keys(usePlanets[0]).filter((key) => key !== 'residents')
  );

  return (
    <div className="table-style">
      <div className="tbl-header">
        <table cellPadding={ 0 } cellSpacing={ 0 } border={ 0 }>
          <thead className="thead">
            <tr className="tr">
              {
                usePlanets[0] && colums
                  .map((heading, index) => <th key={ index }>{ heading }</th>)
              }
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding={ 0 } cellSpacing={ 0 } border={ 0 }>
          <tbody className="tbody">
            {
              usePlanets.map((row, indexRow) => (
                <tr key={ indexRow } className="tr">
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
    </div>
  );
}

export default Table;
