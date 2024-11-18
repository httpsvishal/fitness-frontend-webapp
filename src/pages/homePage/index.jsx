import logo from '../../assets/logo.jpeg';
import LoginSection from '../../components/LoginSection';
import './index.css';

const HomePage = () => {
    

    return (
        <div className="w-full h-[100dvh] flex">
            <div className="w-full h-full logo-area flex justify-center items-center sm:w-1/2">
                <img src={logo} alt="Fitness Logo" className='rounded-[50%] h-1/3' />
            </div>
            <div className="w-full h-full flex justify-center items-center sm:w-1/2">
                <LoginSection />
            </div>
        </div>
    );
}

export default HomePage;