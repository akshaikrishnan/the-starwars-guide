const getPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets/");
  const data = await response.json();
  return data;
};

export default async function About() {
  const planets = await getPlanets();
  return (
    <>
      <div className="px-18 text-center py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hey There! Lets talk about{" "}
          <span className="text-blue-600 dark:text-blue-500">Star Wars</span>{" "}
          Planets
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 px-36">
          "Hey there, fellow galactic explorer! Prepare to embark on a journey
          through the Star Wars universe where we'll dive deep into the
          mesmerizing worlds that make up this epic saga. As Yoda once wisely
          said, 'Do, or do not. There is no try,' so join me as we boldly
          venture through the Star Wars planets, from the desert sands of
          Tatooine to the lush forests of Endor. My the Force be with you,
          because in this adventure, we're going to need it, and remember, 'The
          Force will be with you, always.'" 🌌✨🪐{" "}
          <span className="text-blue-600">#StarWarsNerdsUnite</span>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5">
        {planets.results.map((planet: any) => (
          <div key={planet.name}>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {planet.name}
              </h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  Rotation Period{" "}
                  <strong className="ml-2">{planet.rotation_period}</strong>
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Orbital Period{" "}
                  <strong className="ml-2">{planet.orbital_period}</strong>
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  Diameter
                  <strong className="ml-2">{planet.diameter}</strong>
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                  Climate
                  <strong className="ml-2">{planet.climate}</strong>
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                  Gravity
                  <strong className="ml-2">{planet.gravity}</strong>
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                  Terrain
                  <strong className="ml-2">{planet.terrain}</strong>
                </span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                  Surface Water
                  <strong className="ml-2">{planet.surface_water}</strong>
                </span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                  Population
                  <strong className="ml-2">{planet.population}</strong>
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
