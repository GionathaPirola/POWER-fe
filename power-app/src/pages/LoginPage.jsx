import {useEffect, useState} from 'react';
import '../styles/style.css';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isUsernameValid = (username) => {
        return username === 'admin';    //TODO implementare login
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if(isUsernameValid(username)) {
            localStorage.setItem('username', username);
            onLogin(username);
            setError('');
        } else {
            setError('Errore: invalid username');
        }
    };

    useEffect(() => {
        localStorage.removeItem('username');
    }, []);

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