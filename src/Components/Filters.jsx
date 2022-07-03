import React from 'react';
import FilterSearch from './FilterSearch';
import NumericFilterInputs from './NumericFilterInputs';
import FiltersList from './FiltersList';
import OrderFilterInputs from './OrderFilterInputs';
import '../CSS/Filters.css';

export default function Filters() {
  return (
    <div className="filters">
      <FilterSearch />
      <NumericFilterInputs />
      <OrderFilterInputs />
      <FiltersList />
    </div>
  );
}
