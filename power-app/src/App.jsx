import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Header from './commons/components/Header.jsx';
import { Navigate } from 'react-router-dom';
import './styles/index.css';
import WorkoutHome from "./pages/Workout/WorkoutHome.jsx";
import ProtectedRoute from "./commons/components/ProtectedRoute.jsx";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/home" element={<ProtectedRoute> <HomePage /> </ProtectedRoute>} />
                <Route path="/workout-home" element={<ProtectedRoute> <WorkoutHome /> </ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);