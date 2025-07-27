import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const username = localStorage.getItem('username');
    if (username !== 'admin') { //TODO: implementare login con access token ecc
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProtectedRoute;