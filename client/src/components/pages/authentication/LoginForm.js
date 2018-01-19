import React from 'react'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {Link} from 'react-router-dom'

const style = {
  container: {
    width: '500px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px'
  },
  card: {
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#607D8B',
    marginBottom: '10px'
  },
  label: {
    fontSize: '20px',
    fontFamily: 'Oswald, sans-serif',
    color: '#fff'
  },
  input: {
    padding: '10px',
    fontSize: '17px',
    fontFamily: 'Oswald, sans-serif',
    color: '#333',
    width: '90%'
  },
  button: {
    marginRight: '20px'
  },
  link: {
    textDecoration: 'none'
  }
  }

const LoginForm = ({ emial, password, onSubmit, handleChange}) => 
  <form style={style.container}>
    <div >
      <Card raised style={style.card}>
        <Typography style={style.label} type='headline' component='h2'>
          Email: 
        </Typography>
        <input style={style.input} type='text' id='email' onChange={handleChange}/>
      </Card>

      <Card raised style={style.card}>
        <Typography style={style.label} type='headline' component='h2'>
          Password: 
        </Typography>
        <input style={style.input} type='text' id='password' onChange={handleChange}/>
      </Card>
    </div>

    <div>
      <Button style={style.button} onClick={onSubmit} raised> Login </Button>
      <Button style={style.button} raised><Link to='/sign-up' style={style.link}> Not Registered? Sign Up Now </Link></Button>
    </div>

  </form>

export default LoginForm

