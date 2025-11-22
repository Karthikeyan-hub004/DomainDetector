import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo">
                    DomainDetector
                </Link>
                <div>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
