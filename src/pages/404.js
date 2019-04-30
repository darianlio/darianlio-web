import React from "react"
import { Link } from "gatsby"
import "@styles/error.scss"

const NotFoundPage = () => (
  <div className="error-container">
    <h1>404</h1>
    <h2>Not Found</h2>
    <p>Oops! Looks like you have entered an invalid page..</p>
    <Link className="back" to="/">
      Return to Home
    </Link>
  </div>
)

export default NotFoundPage
