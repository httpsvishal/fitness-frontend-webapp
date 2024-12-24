import logo from '../../assets/logo.jpeg';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import HomeSection from '../../components/HomeSection';

const HomePage = ({ page }) => {


    return (
        <div className="w-full h-[100dvh] flex">
            <div className="w-full h-full logo-area flex justify-center items-center sm:w-1/2">
                <img src={logo} alt="Fitness Logo" className='rounded-[50%] h-1/3' />
            </div>
            <div className="w-full h-full flex justify-center items-center sm:w-1/2">
                <Routes>
                    <Route path="/" element={<HomeSection />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </div>
    );
}

export default HomePage;