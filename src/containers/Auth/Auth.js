import React, { Component } from 'react'

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
        <h3>{title}</h3>
        <p>{text}
          <button
            className="changeForm"
          >            
            {title}
          </button>
        </p>
        <button>{title} with Facebook</button>
        <button>{title} with Facebook</button>
        <hr />
        <button>{title} with email</button>
      </div>
    )
  }

  render() {  
    return (
      <div className="Auth">
        <span>&#10005;</span>
        {
          this.state.signUp.visible
          ? this.renderForm(this.state.signUp.text, this.state.signUp.title)
          : this.renderForm(this.state.logIn.text, this.state.logIn.title)
        }     
      </div>
    )
  }
}
