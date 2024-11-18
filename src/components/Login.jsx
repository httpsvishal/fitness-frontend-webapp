import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        const response = await fetch('https://fitnessbackend-1-0cjt.onrender.com/api/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );
        const data = await response.json();
        console.log(data);
        if (data.message === 'Login successful') {
            navigate('/welcome');
        }
        else{
            navigate('/');
        }

    };

    return (
        <div className='flex flex-col items-center gap-14 '>
            <h2 className='text-3xl sm:w-2/3 text-center font-semibold text-[rgba(18,78,102,1)]'>Your one stop solution for all your fitness needs</h2>
            <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
                <input
                        type="email"
                        placeholder="Enter Your Email Here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border border-gray-300 px-6 py-2 rounded'
                    />
                <input
                    type="password"
                    placeholder="Enter Your Password Here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='border border-gray-300 px-6 py-2 rounded'
                />
                <button type="submit" className='px-8 py-2 bg-[rgba(18,78,102,1)] text-white max-w-fit rounded-[25px]'>Login</button>
            </form>
        </div>
    );
};

export default Login;