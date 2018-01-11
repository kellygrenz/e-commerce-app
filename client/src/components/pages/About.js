import React from 'react'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

const style = {
  
  container: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: '#D64541'
  },
  text: {
    color: '#fff',
    fontSize: '20px'
  }
}

const About = () =>
  <div >
    <Card>
      <div style={style.container}>
        <Typography type='display1' gutterBottom=''>
          <h1 style={style.text}>About Page</h1>
        </Typography>
      </div>
    </Card>
  </div>

export default About