


const SignUpPage2 = ({ data, setData, setPage }) => {

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    return (
        <div className='flex flex-col items-center gap-14 '>
            <h2 className='text-3xl text-center font-semibold text-[rgba(18,78,102,1)]'>Lets Get Started !</h2>
            <form onSubmit={() => setPage(3)} className='flex flex-col items-center gap-4'>
                <label htmlFor="age">
                    <h4 className="text-sm text-slate-700">Age :</h4>
                    <input
                        type="number"
                        placeholder="Enter Your Age Here"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                        required
                    />
                </label>

                <label htmlFor="weight">
                    <h4 className="text-sm text-slate-700">Weight :</h4>
                    <input
                        type="number"
                        placeholder="Enter Your Weight Here"
                        name="weight"
                        value={data.weight}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                        required
                    />
                </label>

                <label htmlFor="height">
                    <h4 className="text-sm text-slate-700">Height :</h4>
                    <input
                        type="number"
                        placeholder="Enter Your Height Here"
                        name="height"
                        value={data.height}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                        required
                    />
                </label>
                <label htmlFor="gender" className="w-full">
                    <h4 className="text-sm text-slate-700">Gender :</h4>
                    <select
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    >
                        <option value="" disabled>Select Your Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>

                <label htmlFor="activityLevel" className="w-full">
                    <h4 className="text-sm text-slate-700">Activity Level :</h4>
                    <select
                        name="activityLevel"
                        value={data.activityLevel}
                        onChange={handleChange}
                        className='border w-full border-gray-300 px-6 py-2 rounded'
                        required
                    >
                        <option value="" disabled>Select Your Activity Level</option>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly Active">Lightly Active</option>
                        <option value="Moderately Active">Moderately Active</option>
                        <option value="Very Active">Very Active</option>
                    </select>
                </label>
                <button type="submit" className='px-8 py-2 bg-[rgba(18,78,102,1)] text-white max-w-fit rounded-[25px]'>Next</button>
            </form>
        </div>
    );

}

export default SignUpPage2;