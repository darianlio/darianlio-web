import React from "react"
import PropTypes from "prop-types"
import { socialMedia } from "@config"
import "./footer.scss"

const Footer = () => (
  <footer>
    <div className="footFlexContainer">
      <div className="contactContainer">
        <div className="emailContainer">
          <h1>Email</h1>
          <i class="far fa-envelope" />
          <a
            href="mailto:darianlio97@gmail.com"
            rel="nofollow noopener noreferrer"
            aria-label="email"
          >
            &nbsp;&nbsp;darianlio97@gmail.com
          </a>
        </div>
        <div className="locationContainer">
          <h1>Location</h1>
          <i class="fas fa-map-marker-alt" />
          <a
            href="https://www.google.com/maps/place/Toronto,+ON/@43.6565353,-79.6010302,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843"
            target="__blank"
            rel="nofollow noopener noreferrer"
            aria-label="location"
          >
            &nbsp;&nbsp;Toronto, Canada
          </a>
        </div>
      </div>
      <div className="socialContainer">
        <p className="footerTitle">Let's talk.</p>
        <div className="socialItemList">
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a
                className="socialLink"
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === "Github" ? (
                  <i class="fab fa-github" />
                ) : name === "Linkedin" ? (
                  <i class="fab fa-linkedin-in" />
                ) : (
                  <i class="fab fa-instagram" />
                )}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="footNavContainer">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright">© Darian Lio 2019.</div>
  </footer>
)

export default Footer
