import React, { Component } from "react"
import PropTypes from "prop-types"
import sr from "../utils/sr"
import { srConfig } from "../config/index"
import "./education.scss"

class Education extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    sr.reveal(this.education, srConfig())
  }

  render() {
    const { data } = this.props
    return (
      <div
        className="education-container"
        id="education"
        ref={el => (this.education = el)}
      >
        <div className="education-title">Education</div>
        <div className="hline" />
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter } = node
            const { title, company, range } = frontmatter
            return (
              <div key={i} className="container">
                <div className="school-title">
                  <span>{title}</span>
                  <span className="range">{range}</span>
                </div>
                <div className="school">{company}</div>
              </div>
            )
          })}
      </div>
    )
  }
}

export default Education
