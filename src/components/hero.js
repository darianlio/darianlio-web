import React, { Component } from "react"
import PropTypes from "prop-types"
import resume from "../images/resume.pdf"
import "./hero.scss"

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node

    return (
      <div className="heroBg">
        <div className="heroContainer">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.name}</h2>
          <h3>{frontmatter.subtitle}</h3>
          <div
            className="heroDetails"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <a
            href={resume}
            target="__blank"
            rel="nofollow noopener noreferrer"
            className="main-btn"
          >
            View Resume
          </a>
        </div>
      </div>
    )
  }
}

export default Hero
