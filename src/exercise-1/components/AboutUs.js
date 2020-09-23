import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <section>
                    <p>Company: ThoughtWorks Local</p>
                    <p>Location: Xi'an</p>
                </section>
                <section>
                    <p>For more information, please view our</p>
                    <Link to = "/">website.</Link>
                </section>
            </div>
        )
    }
}

export default AboutUs;