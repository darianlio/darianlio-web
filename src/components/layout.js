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
import { particleConfig } from "../config/index"
import Head from "./head"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const ParticlesStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  zIndex: "-1",
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
            <Head metadata={site.siteMetadata} />
            <Particles params={particleConfig} style={ParticlesStyle} />
            <Header />
            <div className="container">
              {children}
              <Footer />
            </div>
          </div>
        )}
      />
    )
  }
}

export default Layout
