import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import SignUpForm from './SignUpForm'

const style = {
  container: {
    display: 'flex',
    width: '50%',
    background: '#FF5722',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px'
  }
}

class SignUpContainer extends Component {
  state =  {
    firstName: undefined,
    lastName: undefined, 
    email: undefined
  }

  handleChange = (e) => this.setState({ [e.target.id]: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    console.log('NEW USER')
    this.props.domainData.newUser(this.state)
      .then(() => this.props.history.push('/'))
      .catch(err => alert(err, Object.keys(err)))
  }
  

  render() {
    console.log(this.props)
    return (
      <div style={style.container}>
        <SignUpForm 
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          
          />
      </div>
    )
  }
  
}

export default withRouter(SignUpContainer)
