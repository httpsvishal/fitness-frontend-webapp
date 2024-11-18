const ExercisePlan = ({ data }) => {
    return (
      <section className="bg-white shadow rounded p-4">
        <h2 className="text-2xl font-bold mb-4">Exercise Plan</h2>
        <p>{data.steps_goal}</p>
        <h3 className="text-xl font-semibold mt-4">Workout Routine</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>{data.workout_routine.warm_up}</li>
          <li>{data.workout_routine.cardio.activity} for {data.workout_routine.cardio.duration}</li>
          {data.workout_routine.strength_training.map((exercise, index) => (
            <li key={index}>
              {exercise.exercise} - {exercise.sets} sets of {exercise.reps || exercise.reps_per_leg} reps
            </li>
          ))}
          <li>{data.workout_routine.cooldown}</li>
        </ul>
      </section>
    );
  };

    export default ExercisePlan;