import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {    //TODO: implement getUserInfo request to check if user is logged in
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProtectedRoute;