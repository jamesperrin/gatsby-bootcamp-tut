import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I work full-time as a Web Developer.</p>
    <p>
      Need a developer <Link to="/contact">Contact me</Link>.
    </p>
  </Layout>
);

export default AboutPage;
