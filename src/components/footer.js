import React from "react"
import { Link } from "react-scroll"
import { socialMedia } from "@config"
import "@styles/footer.scss"

const Footer = () => (
  <footer id="footer">
    <Link
      activeClass="active"
      to="header"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="footer-arrow"
    />
    <div className="footer-flex-container">
      <div className="footer-contact-container">
        <div className="footer-contact-heading">
          <h1>Contact Me</h1>
        </div>
        <div className="email-container">
          <i className="far fa-envelope" />
          <a
            href="mailto:darianlio97@gmail.com"
            rel="nofollow noopener noreferrer"
            aria-label="email"
          >
            darianlio97@gmail.com
          </a>
        </div>
        <div className="location-container">
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
      <div className="footer-social-container">
        <p className="footer-social-heading">Let's talk.</p>
        <div className="social-list">
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a
                className="social-links"
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name === "Github" ? (
                  <i className="fab fa-github" />
                ) : name === "Linkedin" ? (
                  <i className="fab fa-linkedin-in" />
                ) : name === "Instagram" ? (
                  <i className="fab fa-instagram" />
                ) : (
                  <i className="fab fa-facebook" />
                )}
              </a>
            </li>
          ))}
        </div>
      </div>
      <div className="footer-navigation-container">
        <div className="navigation-links">
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
