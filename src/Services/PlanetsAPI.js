async function PlanetsAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await (await fetch(url)).json();
  return data;
}

export default PlanetsAPI;
