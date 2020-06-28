import React from 'react'
import './Footer.scss'
import InstaLogo from '../../resources/image/icons/inst_foot.svg'
import FacebookLogo from '../../resources/image/icons/facebook_foot.svg'
import TwitterLogo from '../../resources/image/icons/twitter_foot.svg'
import FoursquareLogo from '../../resources/image/icons/foursquare_foot.svg'
import { Link } from 'react-router-dom'

const renderLogo = logos => {
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

export default function Footer() {
  const logos = [
    {to: '#', label: FacebookLogo, alt: 'Facebook'},
    {to: '#', label: FoursquareLogo, alt: 'Twitter'},
    {to: '#', label: TwitterLogo, alt: 'Foursquare'},
    {to: '#', label: InstaLogo, alt: 'Instagram'}
  ]

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
      <div className="foot-txt">
        <h2>HOURS</h2>
        <p>
          OPEN DAILY <br />
          10AM-8PM
        </p>
      </div>
      <form>
        <h2>MAILING LIST</h2>
        <input 
          type="email"
          id="emailInput"
          placeholder="Enter your email here*"
        /> <br />
        <button>SUBSCRIBE</button>
      </form>
      <div>
        <p>©2023 by Gelato. Proudly created with <a href="https://www.wix.com/">Wix.com</a></p>
      </div>
      <div className="logos">
        {renderLogo(logos)}
      </div>
    </div>
  )
}
