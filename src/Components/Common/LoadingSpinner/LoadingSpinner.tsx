// Code to show loading spinner when the user is waiting for the response from the API

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-96 h-96 gap-4">
      <img
        src="/images/imageLoading.png"
        alt="loading spinner"
        className="w-40 h-40 animate-spin"
      />
      <p className="text-center font-medium text-xl mt-2 dark:text-white">
        Cargando...
      </p>
    </div>
  );
};

export default LoadingSpinner;
