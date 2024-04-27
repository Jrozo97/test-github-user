// Desc: Search visualization component to show when the user needs to search for something

const SearchVisualization = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/images/imageSearch.png"
        alt="search illustration"
        className="w-96 h-auto max-sm:w-72 max-sm: self-center"
      />
      <p className="text-center font-medium text-xl dark:text-white">
        Aun no has realizado ninguna búsqueda.
        <br /> Por favor ingresa un usuario de GitHub
      </p>
    </div>
  );
};

export default SearchVisualization;
