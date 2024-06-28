import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoNavbar from '../../assets/logo-navbar.png';

const Navbar = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Chama a função de logout passada como prop
        if (typeof onLogout === 'function') {
            onLogout();
            navigate('/login');

        }
    };

    const navigateTo = (path) => {
        navigate(path);
    };

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logoNavbar} alt="Logo" className="logo" onClick={goToHomePage} />
            </div>
            <div className="navbar-center">
                <div className="navbar-divider"></div>
                <h4 className="navbar-item">Dashboard</h4>
                <div className="navbar-divider"></div>
                {/* <h4 className="navbar-item" onClick={() => navigateTo('/atividades')}>Atividades</h4> */}
            </div>
            <div className="navbar-right">
                <button className="logout-button" onClick={handleLogout}><h4>Logout</h4></button>
            </div>
        </nav>
    );
};

export default Navbar;
