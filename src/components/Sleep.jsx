const Sleep = ({ data }) => {
    return (
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Sleep</h2>
        <p>{data.recommended_hours}</p>
        <p>{data.environment}</p>
      </section>
    );
  };
      
     export default Sleep;