import React, { useState } from 'react';
import {getModel} from "../../../commons/Model.js";
const NewWorkoutPopup = ({ onClose }) => {
    const model = getModel();
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError('');
    };

    const handleSave = () => {
        if (!file) {
            setError('File not selected');
            return;
        }
        //Client.uploadWorkout(file).then(r => console.log(r));
    };

    return (
        <div className="popup-container">
            <div className="popup">
                {error && <p className="error-message">{error}</p>}
                <h2>{model.WORKOUT.NEW_WORKOUT.UPLOAD_WORKOUT}</h2>
                <input type="file" onChange={handleFileChange} />

                <div className="popup-buttons">
                    <button
                        className="save-style"
                        onClick={handleSave}
                        disabled={!file}
                        >
                        {model.COMMON.BUTTON.SAVE}
                    </button>
                    <button
                        className="cancel-style"
                        onClick={onClose}
                    >
                        {model.COMMON.BUTTON.CANCEL}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewWorkoutPopup;