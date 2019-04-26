import React, { Component } from "react"
import PropTypes from "prop-types"
import { email } from "@config"
import "./contact.scss"

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <div className="contactContainer">
        <div className="contactTitle">{title}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <a
          className="contactbtn"
          href={`mailto:${email}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Get in Touch{" "}
        </a>
      </div>
    )
  }
}

export default Contact
