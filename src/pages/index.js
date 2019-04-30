import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "@components/layout"
import Hero from "@components/hero"
import About from "@components/about"
import Experience from "@components/experience"
import Education from "@components/education"
import Projects from "@components/projects"
import Contact from "@components/contact"
import "@styles/index.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <div className="hero-main-container" id="content">
      <Hero data={data.hero.edges} />
    </div>
    <div className="main-container">
      <About data={data.about.edges} />
      <Experience data={data.experience.edges} />
    </div>
    <div className="education-main-container">
      <Education data={data.education.edges} />
    </div>
    <div className="main-container">
      <Projects data={data.projects.edges} />
      <Contact data={data.contact.edges} />
    </div>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
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
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    education: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/education/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            range
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 50) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
            tech
            show
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
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
`
