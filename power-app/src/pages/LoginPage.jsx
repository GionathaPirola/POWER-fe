import { useState } from 'react';
import '../styles/style.css';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        onLogin(username);
    };

    return (
        <div className="homepage-container">
            <h1 className="homepage-title">POWER</h1>
            <form className="homepage-form" onSubmit={handleLogin}>
                <input
                    className="homepage-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    className="homepage-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button className="homepage-button" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;