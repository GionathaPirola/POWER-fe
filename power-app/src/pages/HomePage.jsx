import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username !== 'admin') {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Benvenuto nella HomePage!</h1>
        </div>
    );
}

export default HomePage;