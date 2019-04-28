import React, { Component } from "react"
import { Link, Events, animateScroll as scroll } from "react-scroll"
import "./header.scss"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
  }

  scrollToTop() {
    scroll.scrollToTop()
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
  }

  render() {
    const menuActive = this.state.menu ? "is-active" : ""
    const navActive = this.state.menu ? "menu-open" : ""

    return (
      <div className="header">
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

        <nav className="navbar">
          <div className="logoContainer">
            <Link className="logoLink" to="/" aria-label="Home">
              <img src={require(`../images/logo.png`)} id="logo" />
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
        </nav>
      </div>
    )
  }
}

export default Header
