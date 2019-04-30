import React, { Component } from "react"
import PropTypes from "prop-types"
import sr from "@utils/sr"
import { srConfig } from "@config/index"
import "@styles/education.scss"

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
        <div className="education-heading">Education</div>
        <div className="horizontal-rule" />
        {data &&
          data.map(({ node }, i) => {
            const { frontmatter } = node
            const { title, company, range } = frontmatter
            return (
              <div key={i} className="school-container">
                <div className="school-heading">
                  <span>{title}</span>
                  <span className="school-range">{range}</span>
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
