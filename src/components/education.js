import React, { Component } from "react"
import PropTypes from "prop-types"
import Parallax from "react-rellax"
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
      <div>
        <div id="education-parallax">
          <Parallax speed={2}>
            <div className="clouds" />
          </Parallax>
        </div>
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
      </div>
    )
  }
}

export default Education
