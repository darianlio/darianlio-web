import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import sr from "../utils/sr"
import { srConfig } from "../config/index"
import "./experience.scss"

const Highlighter = styled.span`
  display: block;
  background: rgb(141, 216, 171);
  width: 2px;
  height: 42px;
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 650ms ease;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * 42 : 0)}px
  );
`
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 15px;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "○";
        position: absolute;
        left: 0;
        color: #777;
      }
    }
  }
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? "relative" : "absolute")};
  visibility: ${props => (props.isActive ? "visible" : "hidden")};
  transition: 650ms ease;
  transition-duration: ${props => (props.isActive ? "0.5s" : "0s")};
`

class Experience extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  state = {
    activeTabId: 0,
  }

  componentDidMount() {
    sr.reveal(this.experience, srConfig())
  }

  isActive = id => this.state.activeTabId === id

  setActiveTab = activeTabId => this.setState({ activeTabId })

  render() {
    const { activeTabId } = this.state
    const { data } = this.props

    return (
      <div
        className="experience-container"
        id="experience"
        ref={el => (this.experience = el)}
      >
        <div className="experience-title">Where I&apos;ve Worked</div>
        <div className="tabs-container">
          <div className="tabs" role="tablist">
            {data &&
              data.map(({ node }, i) => {
                const { company } = node.frontmatter
                return (
                  <button
                    className="tab"
                    key={i}
                    isActive={this.isActive(i)}
                    onClick={e => this.setActiveTab(i, e)}
                    role="tab"
                    aria-selected={this.isActive(i) ? "true" : "false"}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={this.isActive(i) ? "0" : "-1"}
                  >
                    <span>{company}</span>
                  </button>
                )
              })}
            <Highlighter activeTabId={activeTabId} />
          </div>
          <div className="content-container">
            {data &&
              data.map(({ node }, i) => {
                const { frontmatter, html } = node
                const { title, url, company, range } = frontmatter
                return (
                  <TabContent
                    key={i}
                    isActive={this.isActive(i)}
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`job${i}`}
                    aria-hidden={!this.isActive(i)}
                  >
                    <div className="job-title">
                      <span>{title}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a
                          href={url}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          {company}
                        </a>
                      </span>
                    </div>
                    <div className="job-range">
                      <span>{range}</span>
                    </div>
                    <div
                      className="job-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </TabContent>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
