import { useNavigate } from 'react-router-dom';
import { getModel } from '../commons/Model.js';

function HomePage() {
    const navigate = useNavigate();
    const model = getModel();

    return (
        <div className="common-container">
            <h2 className="homepage-description">{model.HOMEPAGE.DESCRIPTION}</h2>
            <div className="homepage-buttons-row">
                <button className="homepage-button"
                        onClick={() => navigate('/workout-home')}
                >
                    {model.HOMEPAGE.WORKOUT_BUTTON}
                </button>
                <button className="homepage-button"
                        onClick={() => console.log('TODO')}
                >
                    {model.HOMEPAGE.DIET_BUTTON}
                </button>
            </div>
        </div>
    );
}

export default HomePage;