/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Particles from "react-particles-js"
import { Link } from "react-scroll"
import { particleConfig } from "@config"
import { Head, Header, Footer } from "@components"
import "@styles/index.scss"

const ParticlesStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  opacity: "0",
  animation: "0.5s fade 0.3s forwards",
}

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head />
            <Particles params={particleConfig} style={ParticlesStyle} />
            <Header />
            <div className="sticky-button">
              <div id="fixed-button-top">
                <Link
                  activeClass="active"
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <i className="fas fa-chevron-up" />
                </Link>
              </div>
              <div id="fixed-button-bottom">
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <i className="fas fa-chevron-down" />
                </Link>
              </div>
            </div>
            {children}
            <Footer />
          </div>
        )}
      />
    )
  }
}

export default Layout
