import React from 'react'
import './NavMenu.scss'
import { NavLink, Link } from 'react-router-dom'
import userSvg from '../../resources/image/icons/user.svg'
import facebook from '../../resources/image/icons/facebook.svg'
import instagram from '../../resources/image/icons/instagram.svg'
import twitter from '../../resources/image/icons/twitter.svg'
import foursquare from '../../resources/image/icons/foursquare.png'

const renderLinks = (links) => {
  return links.map((link, index) => {
    return (
      <p key={index}>
        <NavLink
          to={link.to}
          exact={link.exact}
        >
          {link.label}
        </NavLink>
      </p>
    )
  })
}

const renderIcons = (icons) => {
  return icons.map((icon, index) => {
    return (
      <NavLink 
        key={index}
        to={icon.to}
      >
        <img
          src={icon.label}
          className="iconSvgSocial"
          alt={icon.alt}
        />
      </NavLink>
    )
  })
}

export default function NavMenu(props) {
  const links = [
    {to: '/', label: 'Home', exact: true},
    {to: '/flavors', label: 'Flavors', exact: false},
    {to: '/book-an-event', label: 'Book an Event', exact: false},
    {to: '/about', label: 'About', exact: false}
  ]

  const icons = [
    {to: '#', label: facebook, alt: 'Facebook'},
    {to: '#', label: twitter, alt: 'Twitter'},
    {to: '#', label: foursquare, alt: 'Foursquare'},
    {to: '#', label: instagram, alt: 'Instagram'}
  ]

  let cls = [
    'NavMenu'
  ]

  if (props.isOpen) {
    cls.push('open')
  } 

  return (
    <div 
      className={cls.join(' ')}
    >
      <nav className="link-menu">
        {renderLinks(links)}
      </nav>
      <div className="logo">
        <Link to="/">Gelato</Link>
      </div>
      <nav className="social-links">
        <button className="login">
          <div>
            <img
              src={userSvg}
              alt="user"
            />
          </div>
          <span className="login-txt">Log In</span>
        </button>
        {renderIcons(icons)}
      </nav>
      <div 
        className="menu-btn"
        onClick={props.onToggle}
      >
        <span></span>
      </div>
    </div>
  )
}
