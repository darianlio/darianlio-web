import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import favicon from "@images/favicon.ico"
import favicon16x16 from "@images/favicon-32x32.png"
import favicon32x32 from "@images/favicon-32x32.png"
import appleIcon180x180 from "@images/apple-touch-icon.png"
const config = require("@config")

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <meta charset="utf-8" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <link rel="shortcut icon" href={favicon} />
    <meta name="google-site-verification" content="verification_token" />
    <meta name="msvalidate.01" content="verification_token" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
      integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
      crossorigin="anonymous"
    />
  </Helmet>
)

export default Head

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
}
