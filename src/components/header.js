import React, { Component } from "react"
import "./header.scss"

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
          <a id="logo">DL.</a>
          <div className={`overlay ${navActive}`}>
            <ul>
              <li>
                <a href="#about" onClick={this.scrollToContent}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={this.scrollToContent}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" onClick={this.scrollToContent}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={this.scrollToContent}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.scrollToContent}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
