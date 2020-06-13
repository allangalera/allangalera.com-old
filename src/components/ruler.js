import React from "react"
import PropTypes from "prop-types"

const Ruler = ({ width, background, height }) => {
  return (
    <div
      style={{ width: width, background: background, height: `${height}px` }}
    ></div>
  )
}

Ruler.propTypes = {
  width: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.number.isRequired,
}

Ruler.defaultProps = {
  width: `100%`,
  background: "white",
  height: 2,
}

export default Ruler
