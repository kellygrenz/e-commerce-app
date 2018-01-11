import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    display: 'flex',
    
    background: '#674172',
    justifyContent: 'space-between'
  }
}

const Header = () =>
  <div style={style.container}>
    <NavItem exact to='/' style={style.link}> Home </NavItem>
    <NavItem to='/about' style={style.link}> About </NavItem>
    <NavItem to='/products' style={style.link}> Products </NavItem>
    <NavItem to='/add-products'> Add Products </NavItem>
  </div>

export default Header
