import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        if (location.pathname !== '/' && window.history.length > 1) {
            navigate(-1);
        }
    };

    const exitPage = () => {
        navigate('/');
    };

    return (
        <nav className="text-white p-3 flex justify-between items-center" style={{ height: '60px'}}>
            <button className="px-4 py-1 rounded text-dark hover:bg-gray-100" onClick={goBack}>
                <ArrowBackIcon/> Go Back
            </button>
            <button className="px-4 py-1 rounded text-dark hover:bg-gray-100" onClick={exitPage}>
                Exit <CloseIcon/>
            </button>
        </nav>
    );
};

export default Navbar;
