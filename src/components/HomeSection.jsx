import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const HomeSection = ({page}) => {

    const [currentPage, setCurrentPage] = useState(page);
    
    const navigate = useNavigate();

    const handlePageChange = (page) => {
        navigate(page);
    }

    
        return (
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-center">Welcome to FitSphere</h1>
                <p className="text-xl text-center">Your one stop solution for all your fitness needs</p>
                <button className="mt-8 px-4 py-2 bg-[rgba(18,78,102,1)] rounded-[25px] text-white w-[200px]" onClick={() => handlePageChange('/signup')}>Get Started</button>
                <button className="mt-4 px-4 py-2 bg-[rgba(18,78,102,1)] rounded-[25px] text-white w-[200px]" onClick={() => handlePageChange('/login')}>Login</button>
            </div>
        )
    
}

export default HomeSection;