import '../../styles/style.css';

function Header({ username }) {
    return (
        <header className="header">
            <h1 className="header-title">POWER</h1>
            {username && (
                <div className="header-username-box">
                    <span className="header-username">{username}</span>
                </div>
            )}
        </header>
    );
}

export default Header;