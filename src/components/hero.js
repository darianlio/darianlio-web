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
        const { isMounted } = this.state;
        const { frontmatter, html } = data[0].node;

        const one = () => <h1>{frontmatter.title}</h1>;
        const two = () => <h2>{frontmatter.name}</h2>;
        const three = () => <h3>{frontmatter.subtitle}</h3>;
        const four = () => <h4 dangerouslySetInnerHTML={{__html: html}}/>;
        const five = () => <div><a href={`mailto:${email}`}>Contact Me Today!</a></div>

        const items = [one, two, three, four, five];

        return (
            <div className="heroContainer">
                {isMounted && items.map((item, i)=>(
                    <div key={i}>
                        {item}
                        </div>
                    ))}
            </div>
        );
    }
}

export default Hero;