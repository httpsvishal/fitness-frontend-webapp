import { useNavigate } from "react-router-dom";

const SignUpPage3 = ({data,setData}) => {
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(data);
        const response = await fetch('https://fitnessbackend-1-0cjt.onrender.com/api/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        )
        const res = await response.json();
        console.log(res);
        if(res.message === 'User created successfully'){
            alert('User created successfully');
            navigate('/');
        }
        else{
            alert('User already exists');
            navigate('/');
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    }

    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="fitnessGoal">
                    <h4 className="text-sm text-slate-700">What is your fitness goal?</h4>
                    <select
                        name="fitnessGoal"
                        value={data.fitnessGoal}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="weight loss">Weight Loss</option>
                        <option value="muscle gain">Muscle Gain</option>
                        <option value="toning">Toning</option>
                        <option value="general fitness">General Fitness</option>
                    </select>
                </label>
                <label htmlFor="targetWeight">
                    <h4 className="text-sm text-slate-700">What is your target weight?</h4>
                    <input
                        type="number"
                        placeholder="Enter Your Target Weight Here"
                        name="targetWeight"
                        value={data.targetWeight}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                    />
                </label>
                <label htmlFor="timelineForGoals">
                    <h4 className="text-sm text-slate-700">What is your timeline for your goals?</h4>
                    <input
                        type="text"
                        placeholder="Enter Your Timeline Here"
                        name="timelineForGoals"
                        value={data.timelineForGoals}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                    />
                </label>
                <label htmlFor="dietaryPreferences">
                    <h4 className="text-sm text-slate-700">What are your dietary preferences?</h4>
                    <select name="dietaryPreferences"
                        value={data.dietaryPreferences}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    
                    >
                        <option value="" disabled>Select</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Pescatarian">Pescatarian</option>
                        <option value="Keto">Keto</option>
                        <option value="Paleo">Paleo</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label htmlFor="dietaryRestrictions">
                    <h4 className="text-sm text-slate-700">What are your dietary restrictions?</h4>
                    <select name="dietaryRestrictions"
                        value={data.dietaryRestrictions}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="None">None</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                        <option value="Lactose-Free">Lactose-Free</option>
                        <option value="Nut-Free">Nut-Free</option>
                        <option value="Soy-Free">Soy-Free</option>
                        <option value="Halal">Halal</option>
                        <option value="Kosher">Kosher</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label htmlFor="healthConditions">
                    <h4 className="text-sm text-slate-700">Do you have any health conditions?</h4>
                    <select
                        name="healthConditions"
                        value={data.healthConditions}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    >
                        <option value="" disabled>Select</option>
                        <option value="None">None</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Hypertension">Hypertension</option>
                        <option value="Heart Disease">Heart Disease</option>
                        <option value="Asthma">Asthma</option>
                        <option value="Arthritis">Arthritis</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <button type="submit" className='px-8 py-2 bg-[rgba(18,78,102,1)] text-white max-w-fit rounded-[25px]'>Submit</button>    
            </form>
        </div>
    );
}

export default SignUpPage3;