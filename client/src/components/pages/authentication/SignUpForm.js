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


const SignUpForm = ({firstName, lastName, email, handleChange, onSubmit}) =>
  <form style={style.container}>
      <div >
        <Card style={style.card} raised>
          <Typography style={style.label} type="headline" component="h2">
            First Name:
          </Typography>
          <input style={style.input} type='text' id='firstName' onChange={handleChange}/>
        </Card>

        <Card style={style.card} raised>
          <Typography style={style.label} type="headline" component="h2">
            Last Name:
          </Typography>
          <input style={style.input} type='text' id='lastName' onChange={handleChange}/>
        </Card>

        <Card style={style.card} raised>
          <Typography style={style.label} type='headline' component='h2'>
            Email:
          </Typography>
          <input style={style.input} type='text' id='email' onChange={handleChange}/>
        </Card>
        
        
        <Card style={style.card} raised>
          <Typography style={style.label} type='headline' component='h2'>
            Password:
          </Typography>
          <input style={style.input} type='text' id='password' onChange={handleChange}/>
        </Card>

      </div>
      <div>
        <Button onClick={onSubmit} raised  style={style.button}>Sign UP </Button>
        <Button raised style={style.button}> <Link to='/login' style={style.link}>Login</Link></Button>
      </div>
  
  </form>

export default SignUpForm

