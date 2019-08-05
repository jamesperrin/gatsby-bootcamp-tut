import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`;

const Blog = props => {
    const post = props.data.contentfulBlogPost;
    // const options = {};
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.description['en-US'];
                const url = node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} />
            }
        }
    };

    return (
        <Layout>
            <h1 key={post.slug}>{post.title}</h1>
            <p>{post.publishedDate}</p>
            {documentToReactComponents(post.body.json, options)}
        </Layout>
    );
};

export default Blog;
