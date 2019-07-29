import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

const Blog = props => {
    const postData = { ...props.data.markdownRemark };

    return (
        <Layout>
            <h1>{postData.frontmatter.title}</h1>
            <p>{postData.frontmatter.date}</p>
            <div
                dangerouslySetInnerHTML={{
                    __html: postData.html
                }}
            ></div>
        </Layout>
    );
};

export default Blog;
