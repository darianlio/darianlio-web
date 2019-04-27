import React, { Component } from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import sr from "../utils/sr"
import { srConfig } from "../config/index"
import "./projects.scss"

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.revealRefs = []
  }

  state = {
    showMore: false,
  }

  componentDidMount() {
    sr.reveal(this.projects, srConfig())
    this.revealRefs.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore })

  render() {
    const GRID_LIMIT = 6
    const { showMore } = this.state
    const { data } = this.props
    const projects = data.filter(({ node }) => node.frontmatter.show === "true")
    const firstSix = projects.slice(0, GRID_LIMIT)
    const projectsToShow = showMore ? projects : firstSix

    return (
      <div
        className="project-container"
        id="projects"
        ref={el => (this.projects = el)}
      >
        <h4 className="project-title">Projects</h4>
        <div className="project-grid">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { title, image, tech } = frontmatter
              return (
                <div
                  key={i}
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit="false"
                >
                  <div
                    className="project"
                    key={i}
                    ref={el => (this.revealRefs[i] = el)}
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                    tabIndex="0"
                  >
                    <div className="project-inner">
                      <Img
                        className="projectImage"
                        fluid={image.childImageSharp.fluid}
                        alt="Avatar"
                      />
                      <div className="project-overlay">
                        <div className="project-header">
                          <div className="folder">
                            <i className="far fa-folder-open" />
                          </div>
                        </div>
                        <h5 className="project-name">{title}</h5>
                        <div
                          className="project-description"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      </div>
                      <div>
                        <ul className="tech-list">
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <button className="showMoreButton" onClick={this.showMoreToggle}>
          {showMore ? "Fewer" : "More"} Projects
        </button>
      </div>
    )
  }
}

export default Projects
