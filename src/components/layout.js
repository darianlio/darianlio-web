/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {navLinks} from '@config';
import Head from "./head"
import Header from "./header"
import Footer from "./footer"

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    const { children, location} = this.props;

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
              <div className="container">
                {children}
                <Footer />
              </div>
          </div>
        )}
      />
    );
  }
}

export default Layout
