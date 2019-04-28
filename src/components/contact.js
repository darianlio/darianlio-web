import React, { Component } from "react"
import PropTypes from "prop-types"
import sr from "../utils/sr"
import { email, srConfig } from "@config"
import "./contact.scss"

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    sr.reveal(this.contact, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <div
        className="contact-container"
        id="contact"
        ref={el => (this.contact = el)}
      >
        <div className="contactTitle">{title}</div>
        <div
          className="contactDetails"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <a
          className="contactbtn"
          href={`mailto:${email}`}
          rel="nofollow noopener noreferrer"
        >
          Contact Me
        </a>
      </div>
    )
  }
}

export default Contact
