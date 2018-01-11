import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const style = {
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#fff',
    fontSize: '20px',
    padding: '20px'
  }
}

const NavItem = ({to, children, exact}) =>
  <div >
    <NavLink style={style.link} to={to}>{children}</NavLink>
  </div>

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired
}

NavItem.defaultProps = {exact: false}

export default NavItem
