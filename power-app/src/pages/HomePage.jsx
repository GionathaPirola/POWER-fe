import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';

function HomePage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername !== 'admin') {
            navigate('/');
        } else {
            setUsername(storedUsername);
        }
    }, [navigate]);

    return (
        <div className="common-container">
            <main>
                <h2>Benvenuto nella HomePage!</h2>
            </main>
        </div>
    );
}

export default HomePage;