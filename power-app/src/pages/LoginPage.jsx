import {useState} from 'react';
import '../styles/style.css';
import {useNavigate} from "react-router-dom";
import {ApiCalls} from "../commons/api/Client.jsx";

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const data = await ApiCalls.LOGIN(createPayload());
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/home', { replace: true });
        } catch (err) {
            console.log(err.message || 'Login error');
            setError("Invalid username or password");
        }
    };

    const createPayload = () => {
        return { username, password };
    }

    return (
        <div className="common-container">
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit">
                    Login
                </button>
            </form>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
}

export default LoginPage;