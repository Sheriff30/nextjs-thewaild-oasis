import Spinner from "./_components/Spinner";

function loading() {
  return (
    <div className="grid justify-center items-center text-center">
      <Spinner />
      <p>LOADING DATA....</p>
    </div>
  );
}

export default loading;
