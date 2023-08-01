
function Event({ params }) {

  console.log(params);
  return (
    <>
      <div>
        <h1>Este es el evento {params.event}</h1>
      </div>
    </>
  );
}

export default Event;
