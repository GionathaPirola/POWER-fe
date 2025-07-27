import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Header from './components/Header.jsx';
import './styles/index.css';

function AppRoutes({ username, setUsername }) {
    const navigate = useNavigate();

    const handleLogin = (username) => {
        setUsername(username);
        navigate('/home');
    };

    return (
        <>
            <Header username={username} />
            <Routes>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </>
    );
}

function App() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) setUsername(storedUsername);
    }, []);

    return (
        <BrowserRouter>
            <AppRoutes username={username} setUsername={setUsername} />
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);