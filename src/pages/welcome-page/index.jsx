import { useState } from "react";
import MorningRoutine from "../../components/MorningRoutine";
import Meals from "../../components/Meals";
import ExercisePlan from "../../components/ExcercisePlan";
import EveningRoutine from "../../components/EveningRoutine";
import Sleep from "../../components/Sleep";
import Hydration from "../../components/Hydration";
import AdditionalTips from "../../components/AdditionalTips";
import { useSelector } from "react-redux";




const WelcomePage = () => {
    let res = useSelector((state) => state.user.healthPlan);
    console.log(res);
    const [activeSection, setActiveSection] = useState("morning-routine");
    return (
        <div className=" bg-gray-100 min-h-screen text-gray-800 font-sans">
            {/* Sidebar */}
            <nav className="bg-[rgba(18,78,102,1)] text-white min-h-screen h-screen fixed w-1/5 p-4">
                <h1 className="text-2xl font-bold mb-8">Health Plan</h1>
                <ul className="space-y-4">
                    {[
                        { id: "morning-routine", label: "Morning Routine" },
                        { id: "meals", label: "Meals" },
                        { id: "exercise-plan", label: "Exercise Plan" },
                        { id: "evening-routine", label: "Evening Routine" },
                        { id: "sleep", label: "Sleep" },
                        { id: "hydration", label: "Hydration" },
                        { id: "additional-tips", label: "Additional Tips" },
                    ].map((section) => (
                        <li
                            key={section.id}
                            className={`cursor-pointer p-2 rounded ${activeSection === section.id
                                    ? "bg-white text-[rgba(18,78,102,1)]"
                                    : "hover:bg-[#1a5c76]"
                                }`}
                            onClick={() => setActiveSection(section.id)}
                        >
                            {section.label}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <main className=" p-6 w-4/5 justify-self-end space-y-8">
                {activeSection === "morning-routine" && <MorningRoutine data={res.morning_routine} />}
                {activeSection === "meals" && <Meals data={res.meals} />}
                {activeSection === "exercise-plan" && <ExercisePlan data={res.exercise_plan} />}
                {activeSection === "evening-routine" && <EveningRoutine data={res.evening_routine} />}
                {activeSection === "sleep" && <Sleep data={res.sleep} />}
                {activeSection === "hydration" && <Hydration data={res.hydration} />}
                {activeSection === "additional-tips" && <AdditionalTips data={res.additional_tips} />}
            </main>
        </div>
    );
}

export default WelcomePage;