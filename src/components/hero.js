import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { email } from '../config';
import "./hero.scss"

class Hero extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    state = {
        isMounted: false,
    };

    componentDidMount() {
        setTimeout(() => this.setState({ isMounted: true }), 1000);
    }

    componentWillUnmount() {
        this.setState({ isMounted: false });
    }

    render() {
        const { data } = this.props;
        const { frontmatter, html } = data[0].node;

        return (
            <div className="heroContainer">
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.name}</h2>
                <h3>{frontmatter.subtitle}</h3>
                <div dangerouslySetInnerHTML={{__html: html}}></div>
                <div><a href={`mailto:${email}`}>Contact Me Today!</a></div>
            </div>
        );
    }
}

export default Hero;