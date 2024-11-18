const Meals = ({ data }) => {
    return (
        <section className="bg-white shadow rounded p-4">
            <h2 className="text-2xl font-bold mb-4">Meals</h2>
            {Object.entries(data).map(([mealName, mealDetails]) => (
                <div key={mealName} className="mb-6">
                    <h3 className="text-xl font-semibold capitalize">{mealName.replace('_', ' ')}</h3>
                    <p className="text-sm text-gray-600 mb-2">Time: {mealDetails.time}</p>
                    {mealDetails.hydration && (
                        <p className="text-sm text-[rgba(18,78,102,1)] mb-2">{mealDetails.hydration}</p>
                    )}
                    <ul className="space-y-2">
                        {mealDetails.foods.map((food, index) => (
                            <li key={index} className="border p-2 rounded bg-gray-50">
                                <strong>{food.item}</strong>
                                <div className="text-sm">
                                    <p>Calories: {food.calories}</p>
                                    <p>Protein: {food.macronutrients.protein}</p>
                                    <p>Carbs: {food.macronutrients.carbs}</p>
                                    <p>Fat: {food.macronutrients.fat}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Meals;