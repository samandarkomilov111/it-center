const ErrorComponent = ({ error }) => {
  return (
    <div className="flex justify-center py-10 flex-grow">
      <h2 className="text-red-500 text-2xl text-center">{error}</h2>
    </div>
  );
};
export default ErrorComponent;