import React from "react"
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const config = require("../config")

const Head = ({metadata}) => (
    <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns#"/>
        <title itemProp="name" lang="en">
            {metadata.title}
        </title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={config.siteKeywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:locale" content={config.siteLanguage} />
        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="description" content={metadata.description} />
    </Helmet>
);

export default Head;

Head.propTypes = {
    metadata: PropTypes.object.isRequired,
};