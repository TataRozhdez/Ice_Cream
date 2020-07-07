import React, { Component } from 'react'
import './Auth.scss'

export default class Auth extends Component {
  state = {
    signUp: {
      visible: true,
      title: 'Sign Up',
      text: 'Already a member?'
    },
    logIn: {
      visible: false,
      title: 'Log In',
      text: 'New to this site?'
    }
  }

  renderForm(text, title) {
    return (
      <div className="auth-content">
        <h1>{title}</h1>
        <button
          className="changeForm"
        >   
          {text}&nbsp;         
          <b>{title}</b>
        </button>
        <button
          className="social-btn fb"
        >{title} with Facebook</button>
        <button
          className="social-btn google"
        >{title} with Google</button>
        <hr />
        <button
          className="social-btn em"
        >{title} with email</button>
      </div>
    )
  }

  render() {  
    return (
      <div className="Auth">
        <span onClick={this.props.onClose}>&#10005;</span>
        {
          this.state.signUp.visible
          ? this.renderForm(this.state.signUp.text, this.state.signUp.title)
          : this.renderForm(this.state.logIn.text, this.state.logIn.title)
        }     
      </div>
    )
  }
}
