import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import is from 'is_js'

import InstaLogo from '../../resources/image/icons/inst_foot.svg'
import FacebookLogo from '../../resources/image/icons/facebook_foot.svg'
import TwitterLogo from '../../resources/image/icons/twitter_foot.svg'
import FoursquareLogo from '../../resources/image/icons/foursquare_foot.svg'
import Chat from '../../resources/image/icons/chat1.png'

export default class Footer extends Component {
  state = {
    logos: [
      {to: '#', label: FacebookLogo, alt: 'Facebook'},
      {to: '#', label: FoursquareLogo, alt: 'Twitter'},
      {to: '#', label: TwitterLogo, alt: 'Foursquare'},
      {to: '#', label: InstaLogo, alt: 'Instagram'}
    ],
    formControls: {
      value: '',
      valid: false,
      btnTouch: false
    }
  }

  renderLogo = logos => {
    return logos.map((logo, index) => {
      return (
        <Link key={index} to={logo.to}>
          <img
            src={logo.label}
            className="logo-footer"
            alt={logo.alt}
          />
        </Link>
      )
    })
  }

  submitHandler = event => {
    event.preventDefault() 
  }

  loginHandler = () => {
    const login = {...this.state.formControls}
    const validation = is.email(login.value)
    login.btnTouch = true

    if (validation) {
      console.log('Submit')

      login.valid = true
      login.value = ''
    } else {
      login.valid = false
    }
        
    return this.setState({
      formControls: login
    }) 
  }

  onChangeHandler = event => { 
    const control = {...this.state.formControls}
    control.value = event.target.value

    this.setState({
      formControls: control
    })
  }

  render() {  
    const formControls = this.state.formControls
    const clsInput = []

    if (!formControls.valid && formControls.btnTouch) {
      clsInput.push('invalid')
    }
    
    return (
      <div className="Footer">
        <div className="foot-txt">
          <h2>ADDRESS</h2>
          <p>
            500 Terry Francois St. <br />
            San Francisco, <br />
            CA 94158
          </p>
        </div>
        <div className="foot-txt">
          <h2>CONTACT</h2>
          <p>
            info@mysite.com <br />
            Tel: 123-456-7890
          </p>
        </div>
        <div className="foot-txt hours">
          <h2>HOURS</h2>
          <p>
            OPEN DAILY <br />
            10AM-8PM
          </p>
        </div>
        <form onSubmit={this.submitHandler}>
          <h2>MAILING LIST</h2>
          <input 
            className={clsInput.join(' ')}
            type="email"
            id="emailInput"
            placeholder="Enter your email here*"
            value={formControls.value}
            onChange={event => this.onChangeHandler(event)}
            valid={formControls.valid}            
          /> 
          <br />
          <button
            onClick={this.loginHandler}
          >SUBSCRIBE</button>
        </form>
        <div className="foot-wix-link">
          <p>©2023 by Gelato. Proudly created with <a href="https://www.wix.com/">Wix.com</a></p>
        </div>
        <div className="logos">
          {this.renderLogo(this.state.logos)}
        </div>
        <button className="chat-btn">
          <img
            src={Chat}
            alt="Chat"
          />
        </button>
      </div>
    )
  }
}
