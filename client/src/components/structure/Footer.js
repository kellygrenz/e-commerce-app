import React from 'react'

const style = {
  container: {
    background: '#263238',
    padding: '20px'
  },
  text: {
    fontFamily: 'Oswald, sans-serif',
    color: '#fff'
  }
}

const Footer = () =>
  <div style={style.container}>
    <h1 style={style.text}>This is the footer</h1>
  </div>

export default Footer
