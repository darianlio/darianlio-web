import React, {Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "@components/layout"
import Hero from "@components/hero"
import About from "@components/about"
import Experience from "@components/experience"
import Projects from "@components/projects"
import Contact from "@components/contact"

const IndexPage = ({data, location}) => (
  <Layout location={location}>
    <div className="mainContainer" id="content">
      <Hero data={data.hero.edges}/>
      <About data={data.hero.edges}/>
      <Experience data={data.hero.edges}/>
      <Projects data={data.hero.edges}/>
      <Contact data={data.hero.edges}/>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/"}}){
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            contactText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/"}}){
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    experience: allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/experience/"}}
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/"}}
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          frontmatter {
            title
            image
            tech
            show
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/"}}){
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;