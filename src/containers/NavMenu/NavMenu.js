import React, { Component } from 'react'
import './NavMenu.scss'
import { NavLink, Link } from 'react-router-dom'
import userSvg from '../../resources/image/icons/user.svg'
import facebook from '../../resources/image/icons/facebook.svg'
import instagram from '../../resources/image/icons/instagram.svg'
import twitter from '../../resources/image/icons/twitter.svg'
import foursquare from '../../resources/image/icons/foursquare.png'
import Backdrop from '../Backdrop/Backdrop'
import Auth from '../Auth/Auth'

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

export class NavMenu extends Component {
  state = {
    menu: false,
    loginWindow: false,
    links: [
      {to: '/', label: 'Home', exact: true},
      {to: '/flavors', label: 'Flavors', exact: false},
      {to: '/book-an-event', label: 'Book an Event', exact: false},
      {to: '/about', label: 'About', exact: false}
    ],
    icons: [
      {to: '#', label: facebook, alt: 'Facebook'},
      {to: '#', label: twitter, alt: 'Twitter'},
      {to: '#', label: foursquare, alt: 'Foursquare'},
      {to: '#', label: instagram, alt: 'Instagram'}
    ]
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  openLoginWindow = () => {
    this.setState({
      loginWindow: !this.state.loginWindow
    })
  }

  render() {
    const cls = [
      'NavMenu'
    ]

    if (this.state.menu) {
      cls.push('open')
    } 
    return (
      <React.Fragment>
        <div 
          className={cls.join(' ')}
        >
          <nav className="link-menu">
            {renderLinks(this.state.links)}
          </nav>
          <div className="logo">
            <Link to="/">Gelato</Link>
          </div>
          <nav className="social-links">
            <button 
              className="login"
              onClick={this.openLoginWindow}
            >
              <div>
                <img
                  src={userSvg}
                  alt="user"
                />
              </div>
              <span className="login-txt">Log In</span>
            </button>
            {renderIcons(this.state.icons)}
          </nav>
          <div 
            className="menu-btn"
            onClick={this.toggleMenuHandler}
          >
            <span></span>
          </div>
        </div>
        {this.state.menu ? <Backdrop onClick={this.menuCloseHandler}/> : null}
        {this.state.loginWindow ? <Auth onClose={this.openLoginWindow} /> : null}
      </React.Fragment>
    )
  }
}

export default NavMenu