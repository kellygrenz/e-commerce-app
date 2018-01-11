import React from 'react'

const style = {
  container: {
    background: '#013243',
    padding: '20px'
  },
  text: {
    fontFamily: 'Indie Flower, cursive',
    color: '#fff'
  }
}

const Footer = () =>
  <div style={style.container}>
    <h1 style={style.text}>This is the footer</h1>
  </div>

export default Footer
