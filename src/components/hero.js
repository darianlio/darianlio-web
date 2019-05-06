import React, { Component } from "react"
import PropTypes from "prop-types"
import resume from "@images/resume.pdf"
import { email } from "@config"
import "@styles/hero.scss"

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node

    return (
      <div>
        <div className="hero-container">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.name}</h2>
          <h3>{frontmatter.subtitle}</h3>
          <div
            className="hero-details"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <span>
            <a
              href={`mailto:${email}`}
              target="__blank"
              rel="nofollow noopener noreferrer"
              className="main-btn"
              id="email-btn"
            >
              Get In Touch
            </a>
            <a
              href={resume}
              target="__blank"
              rel="nofollow noopener noreferrer"
              className="main-btn"
            >
              View Resume
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default Hero
