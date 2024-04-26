// Definition: ErrorDisplay component to show when there is no results in the search

const ErrorDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/imageErrorSearch.png"
        alt="error search"
        className="w-96 h-auto mb-10 max-sm:w-72"
      />
      <p className="text-center font-medium text-2xl mb-2 dark:text-white">
        ¡Ups!... no se han encontrado resultados!
      </p>
      <p className="text-center font-medium text-base dark:text-white">
        Por favor, intente otra búsqueda
      </p>
    </div>
  );
};

export default ErrorDisplay;
