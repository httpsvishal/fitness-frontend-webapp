import { useState } from "react";

const SignUpPage1 = ({data,setData,setPage}) => {

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };

    return (
        <div className='flex flex-col items-center gap-14 '>
            <h2 className='text-3xl text-center font-semibold text-[rgba(18,78,102,1)]'>Lets Get Started !</h2>
            <form onSubmit={() => setPage(2)} className='flex flex-col items-center gap-4'>
                <input
                        type="email"
                        placeholder="Enter Your Email Here"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className='border border-gray-300 px-6 py-2 rounded'
                        required
                    />
                <input
                    type="text"
                    placeholder="Enter Your Name Here"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    className='border border-gray-300 px-6 py-2 rounded'
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Your Password Here"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className='border border-gray-300 px-6 py-2 rounded'
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Your Password Here"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className='border border-gray-300 px-6 py-2 rounded'
                    required
                />
                <button type="submit" className='px-8 py-2 bg-[rgba(18,78,102,1)] text-white max-w-fit rounded-[25px]'>Next</button>
            </form>
        </div>
    );

}

export default SignUpPage1;