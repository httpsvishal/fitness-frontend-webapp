import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LoginSection = () => {
    const [page, setPage] = useState('home');

    if (page === 'home') {
        return (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center">Welcome to FitSphere</h1>
                <p className="text-xl text-center">Your one stop solution for all your fitness needs</p>
                <button className="mt-8 px-4 py-2 bg-[rgba(18,78,102,1)] rounded-[25px] text-white w-[200px]" onClick={() => setPage('welcome')}>Get Started</button>
                <button className="mt-4 px-4 py-2 bg-[rgba(18,78,102,1)] rounded-[25px] text-white w-[200px]" onClick={() => setPage('login')}>Login</button>
            </div>
        )
    }
    else if (page === 'welcome') {
        return (
            <SignUp />
        )
    }
    else if (page === 'login') {
        return (
            <Login />
        )
    }
}

export default LoginSection;