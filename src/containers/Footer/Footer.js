import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

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
      email: {
        value: '',
        type: 'email',
        errorMessage: 'Enter the correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      }
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

  loginHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault() 
  }

  onChangeHandler = event => {
    console.log(event.target.value)
 
    const control = {...this.state.formControls.email}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
  }

  render() {  
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
            type="email"
            id="emailInput"
            placeholder="Enter your email here*"
            value={this.state.formControls.email.value}
            valid={this.state.formControls.email.valid}
            touched={this.state.formControls.email.touched}
            errorMessage={this.state.formControls.email.errorMessage}
            shouldValidate={!!this.state.formControls.email.validation}
            onChange={event => this.onChangeHandler(event)}
          /> <br />
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
