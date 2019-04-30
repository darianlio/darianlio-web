import React from "react"
import { Link } from "gatsby"
import "@styles/error.scss"

const NotFoundPage = () => (
  <div className="error-container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>
      Uh oh! We looked everywhere for this page. Are you sure the website URL is
      correct?
    </p>
    <Link className="back" to="/">
      Return to Home
    </Link>
  </div>
)

export default NotFoundPage
