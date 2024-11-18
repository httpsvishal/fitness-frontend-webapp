const MorningRoutine = ({ data }) => {
    return (
        <section className="bg-white shadow rounded p-4">
            <h2 className="text-2xl font-bold mb-4">Morning Routine</h2>
            <ul className="space-y-2">
                <li>{data.hydration}</li>
                <li>{data.optional}</li>
                <li>{data.stretching_and_breathing}</li>
            </ul>
        </section>
    );
};

export default MorningRoutine;