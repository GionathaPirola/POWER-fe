import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Header from './commons/components/Header.jsx';
import ProtectedRoute from './commons/components/ProtectedRoute.jsx';
import { Navigate } from 'react-router-dom';
import './styles/index.css';
import WorkoutHome from "./pages/Workout/WorkoutHome.jsx";



function AppRoutes({ username, setUsername }) {
    const navigate = useNavigate();

    const handleLogin = (username) => {
        setUsername(username);
        navigate('/');
    };

    return (
        <>
            <Header username={username} />
            <Routes>
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute> } />
                <Route path="/workout-home" element={<ProtectedRoute> <WorkoutHome /> </ProtectedRoute> } />
                <Route path="*" element={<Navigate to="/home" replace />} />
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