import React from 'react'
import PropTypes from 'prop-types'

const HeaderLink = ({onClick, children}) =>
  <a onClick={onClick}>{children}</a>
  
HeaderLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default HeaderLink
