import {getModel} from "../../commons/Model.js";
import {useState} from "react";
import NewWorkoutPopup from "./newWorkout/NewWorkoutPopup.jsx";

function WorkoutHome() {
    const model = getModel();
    const [openNewWorkoutPopup, setOpenNewWorkoutPopup] = useState(false);

    return (
        <div className="common-container">
            <h2 className="homepage-description">{model.HOMEPAGE.DESCRIPTION}</h2>
            <div className="homepage-buttons-row">
                <button className="homepage-button"
                        onClick={() => setOpenNewWorkoutPopup(true)}
                >
                    {model.WORKOUT.NEW_WORKOUT.ADD_BUTTON}
                </button>
            </div>

            {openNewWorkoutPopup && (
                <NewWorkoutPopup onClose={() => setOpenNewWorkoutPopup(false)} />
            )}
        </div>
    );
}

export default WorkoutHome;