/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Head from "./head"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    const { children, location} = this.props;

    return (
      <StaticQuery
        query = {graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({site}) => (
          <div id="root">
            <Head metadata={site.siteMetaData}/>
            <div className="container">
              {location && navLinks && <Header location={location} navLinks={navLinks}/>}
              <Footer/>
            </div>
          </div>
        )}
      />
    );
  }
}

export default Layout