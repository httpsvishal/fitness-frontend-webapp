const AdditionalTips = ({ data }) => {
    return (
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Additional Tips</h2>
        <ul className="space-y-2">
          <li>{data.mindful_eating}</li>
          <li>{data.stress_management}</li>
          <li>{data.consistency}</li>
        </ul>
      </section>
    );
  };
  
    export default AdditionalTips;  