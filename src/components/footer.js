import React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

import { socialMedia } from "@config"
import "./footer.scss"

const Footer = () => (
  <footer>
    <div className="footFlexContainer">
      <div className="contactContainer">
        <div className="contactTitle">
          <h1>Contact Me</h1>
        </div>
        <div className="emailContainer">
          <i className="far fa-envelope" />
          <a
            href="mailto:darianlio97@gmail.com"
            rel="nofollow noopener noreferrer"
            aria-label="email"
          >
            darianlio97@gmail.com
          </a>
        </div>
        <div className="locationContainer">
          <i className="fas fa-map-marker-alt" />
          <a
            href="https://www.google.com/maps/place/Toronto,+ON/@43.6565353,-79.6010302,10z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843"
            target="__blank"
            rel="nofollow noopener noreferrer"
            aria-label="location"
          >
            Toronto, Canada
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
                  <i className="fab fa-github" />
                ) : name === "Linkedin" ? (
                  <i className="fab fa-linkedin-in" />
                ) : name == "Instagram" ? (
                  <i className="fab fa-instagram" />
                ) : (
                  <i class="fab fa-facebook" />
                )}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="footNavContainer">
        <div className="footerNavLinks">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">© Darian Lio 2019.</div>
  </footer>
)

export default Footer
