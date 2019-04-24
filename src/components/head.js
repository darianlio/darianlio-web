import React from "react"
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';

const Head = ({metadata}) => (
    <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns#"/>
        <title itemProp="name" lang="en">
            {metadata.title}
        </title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={config.siteKeywords} />
    </Helmet>
);

export default Head;

Head.propTypes = {
    metadata: PropTypes.object.isRequired,
};