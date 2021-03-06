import React, { Component } from "react"
import PropTypes from "prop-types"
import Parallax from "react-rellax"
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
    sr.reveal(this.aboutParallax, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills, avatar } = frontmatter

    return (
      <div>
        <div id="about-parallax" ref={el => (this.aboutParallax = el)}>
          <Parallax speed={2}>
            <div className="switch">
              <img src={require(`../images/switch.png`)} />
            </div>
          </Parallax>
          <Parallax speed={-1}>
            <div className="cube1">
              <img src={require(`../images/cube.png`)} />
            </div>
          </Parallax>
          <Parallax speed={-1}>
            <div className="cube2">
              <img src={require(`../images/cube.png`)} />
            </div>
          </Parallax>
          <Parallax speed={-3}>
            <div className="cube3">
              <img src={require(`../images/cube.png`)} />
            </div>
          </Parallax>
          <Parallax speed={-2}>
            <div className="cube4">
              <img src={require(`../images/cube.png`)} />
            </div>
          </Parallax>
        </div>
        <div
          className="about-container"
          id="about"
          ref={el => (this.about = el)}
        >
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
      </div>
    )
  }
}

export default About
