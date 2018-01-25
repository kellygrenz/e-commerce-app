import React from 'react'
import NavItem from './NavItem'
import HeaderLink from './HeaderLink'
import PropTypes from 'prop-types'

const style = {
  container: {
    display: 'flex',
    background: '#607D8B',
    justifyContent: 'flex-start'
    
    
  },
  headerImg: {
    width: '206px',
    height: '35px',
    padding: '25px'
  },
  userLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: '200px',
    color: '#fff'
  }
}

const Header = ({ domainData }) =>
  <div style={style.container}>
    <img src="images/logo_sm.png" style={style.headerImg}/>
    
      <NavItem exact to='/' style={style.link}> Home </NavItem>
      <NavItem to='/about' style={style.link}> About </NavItem>
      <NavItem to='/products' style={style.link}> Products </NavItem>
      <NavItem to='/add-products'> Add Products </NavItem>
      
    <div style={style.userLinks}>
      {domainData.loggedOut ? <NavItem to='/sign-up'> Sign Up Now! </NavItem> : null}
      {domainData.loggedOut ? <NavItem to='/login'> Log In </NavItem> : null }
      {domainData.loggedIn ? <HeaderLink onClick={domainData.logoutUser}> Log Out </HeaderLink> : null}
      {domainData.loggedIn ? <HeaderLink>  {domainData.user.local.email}</HeaderLink> : null}
      {domainData.loggedIn ? <NavItem to='/cart'> Cart </NavItem> : null}
    </div>
  
    
  </div>

Header.propTypes = {
  domainData: PropTypes.object.isRequired
}

export default Header
