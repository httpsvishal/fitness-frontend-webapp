export const signup = async (user) => {
    try {
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
            return {res};
        }
        else{
            throw new Error(res.message);
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const login = async (user) => {
    try {
        const response = await fetch('https://fitnessbackend-1-0cjt.onrender.com/api/auth/login',
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
        

        if(res.message === 'User logged in successfully'){
            alert('User logged in successfully');
            navigate('/');
        }
        else{
            alert('User not found');
            navigate('/');
        }
    }
    catch (error) {
        console.log(error);
    }
}