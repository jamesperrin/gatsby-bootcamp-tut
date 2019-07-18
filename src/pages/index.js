import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>I'm James, a full-stack developer living in beautiful Washington.</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link>.</p>

            <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </div>
    )
};

export default IndexPage;