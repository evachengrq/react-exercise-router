import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutUs.css';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <section className="content">
                    <p>Company: ThoughtWorks Local</p>
                    <p>Location: Xi'an</p>
                </section>
                <section className="content">
                    <p>For more information, please view our</p>
                    <Link to = "/">website.</Link>
                </section>
            </div>
        )
    }
}

export default AboutUs;