import React, { Component } from "react"
import PropTypes from "prop-types"
import "./about.scss"

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills, avatar } = frontmatter

    return (
      <div className="aboutContainer" id="about">
        <div className="aboutHeading">{title}</div>
        <div className="aboutFlexContainer">
          <div className="aboutContentContainer">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <ul className="skillsContainer">
              {skills &&
                skills.map((skill, i) => (
                  <li className="skillLi" key={i}>
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
          <div className="aboutPicContainer">
            <div className="aboutAvatarContainer">
              <p>Image</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
