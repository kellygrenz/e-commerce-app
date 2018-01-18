import React from 'react'
import NavItem from './NavItem'

const style = {
  container: {
    display: 'flex',
    
    background: '#607D8B',
    justifyContent: 'space-between'
  }
}

const Header = () =>
  <div style={style.container}>
    <img src="..../images/logo.png" style={style.headerImg}/>
    <NavItem exact to='/' style={style.link}> Home </NavItem>
    <NavItem to='/about' style={style.link}> About </NavItem>
    <NavItem to='/products' style={style.link}> Products </NavItem>
    <NavItem to='/add-products'> Add Products </NavItem>
  </div>

export default Header
