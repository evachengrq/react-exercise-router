import React, {Component} from 'react';
import '../styles/Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="content">
                <p>Username: Eva</p>
                <p>Gender: Female</p>
                <p>Work: IT Industry</p>
                <p>Website: 'my-profile'</p>
            </div>
        )
    }
}

export default Profile;