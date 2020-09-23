import React, {Component} from 'react';

class Header extends Component {
    state = {
        homeUrl: "/",
        myProfileUrl: "/my-profile",
        aboutMeUrl: "/about-us"
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><link to = {this.state.homeUrl} className = "nav-link"></link>Home</li>
                    <li><link to = {this.state.myProfileUrl} className = "nav-link"></link>My Profile</li>
                    <li><link to = {this.state.aboutUsUrl} className = "nav-link"></link>About Us</li>
                </ul>
            </nav>
        )
    }
}

export default Header;