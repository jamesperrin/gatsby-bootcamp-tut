import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <h1>About Me</h1>
            <p>I work full-time as a Web Developer.</p>
            <p>Need a developer <Link to="/contact">Contact me</Link>.</p>
        </div>
    )
}

export default AboutPage;