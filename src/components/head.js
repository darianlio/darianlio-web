import React from "react"
import Helmet from "react-helmet"
import favicon from "@images/favicon.ico"
import favicon16x16 from "@images/favicon-32x32.png"
import favicon32x32 from "@images/favicon-32x32.png"
import appleIcon180x180 from "@images/apple-touch-icon.png"
const config = require("@config")

const Head = () => (
  <Helmet>
    <title>{config.siteTitle}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content={config.name} />
    <meta name="description" content={config.description} />
    <meta name="keywords" content={config.siteKeywords} />
    <meta name="google-analytics" content={config.googleAnalyticsID} />
    <link rel="shortcut icon" href={favicon} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
    <script
      defer
      src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
      integrity="sha384-g5uSoOSBd7KkhAMlnQILrecXvzst9TdC09/VM+pjDTCM+1il8RHz5fKANTFFb+gQ"
      crossorigin="anonymous"
    />
  </Helmet>
)

export default Head
