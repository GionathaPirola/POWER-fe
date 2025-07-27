import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './styles/index.css';

function LoginWrapper() {
    const navigate = useNavigate();
    const handleLogin = (email) => {
        localStorage.setItem('username', email);
        navigate('/home');
    };
    return <LoginPage onLogin={handleLogin} />;
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </StrictMode>
);