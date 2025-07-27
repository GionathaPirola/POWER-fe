import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';

function LoginWrapper() {
    const navigate = useNavigate();
    const handleLogin = (email) => {
        localStorage.setItem('username', email);
        navigate('/home');
    };
    return <LoginPage onLogin={handleLogin} />;
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginWrapper />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}

export default App;