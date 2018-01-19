import React, {Component} from 'react'
import LoginForm from './LoginForm'
import {withRouter} from 'react-router-dom'


class LoginContainer extends Component {

  state = {
    email: undefined,
    password: undefined
  }

  handleChange = (e) => this.setState({ [e.target.id]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault()
    this.props.domainData.loginUser(this.state.email, this.state.password)
    .then(() => this.props.history.push('/'))
    .catch(err => alert(err, Object.keys(err)))
  }

  render() {
    return (
      <div>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}

        />
      </div>
    )
  }
}

export default withRouter(LoginContainer)
