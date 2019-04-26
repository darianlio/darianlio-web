import React, { Component } from "react"
import PropTypes from "prop-types"

class Education extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props
    const { frontmatter } = data[0].node
    const { title, company, range } = frontmatter
    return (
      <div id="experience">
        <h1>{title}</h1>
        <span>{company}</span>
        <span>{range}</span>
      </div>
    )
  }
}

export default Education
