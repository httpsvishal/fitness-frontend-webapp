import SignUpPage1 from "./SignUpPage1";
import SignUpPage2 from "./SignUpPage2";
import SignUpPage3 from "./SignUpPage3";
import { useState } from "react";

const SignUp = () => {
    const formData = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        age: '',
        weight: '',
        height: '',
        gender: '',
        fitnessGoal: '',
        activityLevel: '',
        targetWeight: '',
        timelineForGoals: '',
        dietaryPreferences: '',
        dietaryRestrictions: '',
        healthConditions: '',
    }
    const [data, setData] = useState(formData);
    const [page, setPage] = useState(1);

    if (page === 1) {
        return (<SignUpPage1 data={data} setData={setData} setPage={setPage} />);
    }

    if (page === 2) {
        return (<SignUpPage2 data={data} setData={setData} setPage={setPage} />);
    }
    if (page === 3) {
        return (<SignUpPage3 data={data} setData={setData} setPage={setPage} />);
    }
}

export default SignUp;