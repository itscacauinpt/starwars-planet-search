async function PlanetsAPI() {
  const url = 'https://swapi.dev/api/planets';
  const data = await (await fetch(url)).json();
  return data;
}

export default PlanetsAPI;
