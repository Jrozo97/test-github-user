// Definition: ErrorDisplay component to show when there is no results in the search

const ErrorDisplay = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/imageErrorSearch.png"
        alt="error search"
        className="w-80 h-80 mb-10"
      />
      <p className="text-center font-medium text-2xl mb-2">
        ¡Ups!... no se han encontrado resultados!
      </p>
      <p className="text-center font-medium text-base">
        Por favor, intente otra búsqueda
      </p>
    </div>
  );
};

export default ErrorDisplay;
