import React from "react";

export class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }))
  }

  render() {
    return (
      <>
        <h1>{!this.state.isLoggedIn ? 'Please sign up' : 'Welcome back!'}</h1>
        <button onClick={this.handleLogin}>{!this.state.isLoggedIn ? 'Login' : 'Logout'}</button>
      </>
    )
  }
}