import React, { Component } from "react"
import PropTypes from "prop-types"
import sr from "@utils/sr"
import Parallax from "react-rellax"
import { email, srConfig } from "@config"
import "@styles/contact.scss"

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    sr.reveal(this.contact, srConfig())
    sr.reveal(this.contactParallax, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <div>
        <div id="contact-parallax" ref={el => (this.contactParallax = el)}>
          <Parallax speed={1} zIndex={-99999}>
            <div className="contact-mail">
              <img src={require(`../images/mail.png`)} />
            </div>
          </Parallax>
          <Parallax speed={2} zIndex={-99999}>
            <div className="contact-fb">
              <img src={require(`../images/fb.png`)} />
            </div>
          </Parallax>
          <Parallax speed={1} zIndex={-99999}>
            <div className="contact-gh">
              <img src={require(`../images/gh.png`)} />
            </div>
          </Parallax>
          <Parallax speed={2} zIndex={-99999}>
            <div className="contact-insta">
              <img src={require(`../images/insta.png`)} />
            </div>
          </Parallax>
        </div>
        <div
          className="contact-container"
          id="contact"
          ref={el => (this.contact = el)}
        >
          <div className="contact-heading">{title}</div>
          <div
            className="contact-details"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <a
            className="contact-btn"
            href={`mailto:${email}`}
            rel="nofollow noopener noreferrer"
          >
            Contact Me
          </a>
        </div>
      </div>
    )
  }
}

export default Contact
