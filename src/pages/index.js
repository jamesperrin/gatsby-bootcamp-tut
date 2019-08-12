import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
    <Layout>
        <Head title="Home" />
        <h1>Hello</h1>
        <h2>
            I'm James, a full-stack developer living in beautiful Washington.
        </h2>
    </Layout>
);

export default IndexPage;
