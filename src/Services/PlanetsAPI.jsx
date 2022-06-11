import { useState, useEffect } from 'react';

function PlanetsAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const { results } = await (await fetch(url)).json();
      setData(results);
    };
    getPlanets();
  }, []);
  return data;
}

export default PlanetsAPI;
