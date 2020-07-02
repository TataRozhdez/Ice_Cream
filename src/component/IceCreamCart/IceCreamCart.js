import React from 'react'
import './IceCreamCart.scss'
import Fade from "react-reveal/Fade"
import NavMenu from '../../containers/NavMenu/NavMenu'
import Footer from '../../containers/Footer/Footer'

export default function IceCreamCart() {
  return (
    <div className="IceCreamCart">
      <NavMenu />
      <Fade>
        <div className="ice-card">

        </div>
      </Fade>
      <Footer />
    </div>
  )
}
