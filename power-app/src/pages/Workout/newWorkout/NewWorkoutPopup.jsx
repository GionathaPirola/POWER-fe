import React, { useState } from 'react';
import {getModel} from "../../../commons/Model.js";

const NewWorkoutPopup = ({ onSave, onClose }) => {
    const model = getModel();
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSave = () => {
        if (file) {
            onSave(file);
        }
    };

    return (
        <div className="popup-container">
            <div className="popup">
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