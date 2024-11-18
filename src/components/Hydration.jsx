const Hydration = ({ data }) => {
    return (
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Hydration</h2>
        <p>{data.daily_target}</p>
        <p>{data.tip}</p>
      </section>
    );
  };
  
    export default Hydration;