const ExercisePlan = ({ data }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
    return (
      <section className="bg-white shadow rounded p-4">
        {/* <h2 className="text-2xl font-bold mb-4">Exercise Plan</h2>
        <p>{data.steps_goal}</p>
        <h3 className="text-xl font-semibold mt-4">Workout Routine</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>{data.warm_up ? data.warm_up : 'No warm up'}</li>
          <li>{data.activity ? data.activity : "" } for {data?.cardio?.duration}</li>
          {data?.strength_training.map((exercise, index) => (
            <li key={index}>
              {exercise.exercise} - {exercise.sets} sets of {exercise.reps || exercise.reps_per_leg} reps
            </li>
          ))}
          <li>{data?.cooldown}</li>
        </ul> */}
        <h2 className="text-2xl font-bold mb-4">Evening Plan</h2>
        {Object.entries(data).map(([key, value]) => (
        <p key={key}>
          <strong>{capitalizeFirstLetter(key.replace('_',' '))}:</strong> {value}
        </p>
      ))}
      </section>
    );
  };

    export default ExercisePlan;