import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import sr from "@utils/sr"
import { srConfig } from "@config"
import "@styles/about.scss"

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    sr.reveal(this.about, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills, avatar } = frontmatter

    return (
      <div className="about-container" id="about" ref={el => (this.about = el)}>
        <div className="about-heading">{title}</div>
        <div className="about-flex-container">
          <div className="about-pic-container">
            <div className="about-avatar-container">
              <Img
                className="about-avatar"
                fluid={avatar.childImageSharp.fluid}
                alt="Avatar"
              />
            </div>
          </div>
          <div className="about-content-container">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul className="skills-container">
              {skills &&
                skills.map((skill, i) => (
                  <li className="skills" key={i}>
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
