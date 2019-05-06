import React, { Component } from "react"
import { Link } from "react-scroll"
import "@styles/header.scss"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  render() {
    const menuActive = this.state.menu ? "is-active" : ""
    const navActive = this.state.menu ? "menu-open" : ""

    return (
      <header id="header">
        <div className="menu">
          <button
            className={`hamburger hamburger--slider ${menuActive}`}
            type="button"
            onClick={this.toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>
        </div>

        <nav className="nav-bar">
          <div className="logo-container">
            <Link
              className="logo-link"
              to="header"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              aria-label="Home"
            >
              <img
                src={require(`../images/logo.png`)}
                id="logo"
                alt="dar-logo"
              />
            </Link>
          </div>
          <div className={`overlay ${navActive}`}>
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
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
                  onClick={this.toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
