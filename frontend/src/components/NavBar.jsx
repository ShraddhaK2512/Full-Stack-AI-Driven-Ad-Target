import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>
                <li><Link to="/product-search">Product Search</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;