import React from "react"
import PropTypes from "prop-types"
import Ruler from "../components/ruler"

import "./section.scss"

const Section = ({ title, id, children }) => {
  return (
    <article id={id} className="section">
      <div className="section-title">
        <Ruler background="#333" />
        <h2 className="title">{title}</h2>
        <Ruler background="#333" />
      </div>
      <div className="section-content">{children}</div>
    </article>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Section
