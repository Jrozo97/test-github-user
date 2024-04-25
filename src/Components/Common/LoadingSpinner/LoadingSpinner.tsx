// Code to show loading spinner when the user is waiting for the response from the API

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-96 h-96">
      <img
        src="/images/imageLoading.png"
        alt="loading spinner"
        className="w-20 h-20 animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
