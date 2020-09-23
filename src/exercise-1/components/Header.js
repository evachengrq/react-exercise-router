import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-lg navbar-light bg-light" id = "header">
                <Link to="/" className = "nav-link">Home</Link>
                <Link to="/my-profile" className = "nav-link">My Profile</Link>
                <Link to="/about-us" className = "nav-link">About Us</Link>
            </nav>
        )
    }
}

export default Header;