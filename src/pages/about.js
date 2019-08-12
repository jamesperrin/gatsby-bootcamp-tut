import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => (
    <Layout>
        <Head title="About" />
    <h1>About Me</h1>
    <p>I work full-time as a Web Developer.</p>
    <p>
      Need a developer <Link to="/contact">Contact me</Link>.
    </p>
  </Layout>
);

export default AboutPage;
