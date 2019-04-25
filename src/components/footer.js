import React from "react"
import PropTypes from 'prop-types'
import { socialMedia } from '@config'
import "./footer.scss"
const Footer = () => (
  <footer>
    <div className="socialContainer">
      <div className="footerTitle">Get in touch!</div>
      <div className="socialItemList">
        {socialMedia.map(({ name, url}, i) => (
          <li key={i}>
              <a className="socialLink"
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <i class="fab fa-github"></i>
                ) : name === 'Linkedin' ? (
                  <i class="fab fa-linkedin-in"></i>
                )  : name === 'Instagram' ? (
                  <i class="fab fa-instagram"></i>
                ) : name == 'Email' ? (
                  <i class="far fa-envelope"></i>
                ) : (
                  <i class="fas fa-map-marker-alt"></i>
                )}
              </a>
            </li>
        ))}
      </div>
      <div className="copyright">
        <p>© Darian Lio 2019.</p>
      </div>
    </div>
  </footer>
)

export default Footer;