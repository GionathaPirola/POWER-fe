import { useNavigate } from 'react-router-dom';
import {getModel} from "../../commons/Model.js";

function WorkoutHome() {
    const model = getModel();

    return (
        <div className="common-container">
            <h2 className="homepage-description">{model.HOMEPAGE.DESCRIPTION}</h2>
            <div className="homepage-buttons-row">

            </div>
        </div>
    );
}

export default WorkoutHome;