import React from 'react';
import FilterSearch from './FilterSearch';
import NumericFilterInputs from './NumericFilterInputs';
import FiltersList from './FiltersList';
import OrderFilterInputs from './OrderFilterInputs';
import '../CSS/Filters.css';

export default function Filters() {
  return (
    <div className="filters">
      <div className="search-filter">
        <FilterSearch />
      </div>
      <div className="numeric-filters">
        <NumericFilterInputs />
        <OrderFilterInputs />
        <FiltersList />
      </div>
    </div>
  );
}
