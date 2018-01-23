import React from 'react'

const style = {
  container: {
    width: '100vw',
    display: 'flex'
  },
  headerImage: {
    width: '100%'
  }
}

const Home = () =>
  <div style={style.container}>
    
    <img style={style.headerImage} src='images/header.jpg' />
    
  </div>

export default Home