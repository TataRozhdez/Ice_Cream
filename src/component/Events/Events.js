import React from 'react'
import './Events.scss'
import Fade from 'react-reveal/Fade'
import NavMenu from '../../containers/NavMenu/NavMenu'
import Footer from '../../containers/Footer/Footer'
import TextCenterBlock from '../../containers/TextCenterBlock/TextCenterBlock'

export default function Events() {
  return (
    <div className="Events">
      <NavMenu />
      <Fade>
        <TextCenterBlock 
          bck="EventsPg"
          txtLineFirst="CATERING & MORE"
          txtLineSecond="EVENTS"
        />
        <div className="eventFragment">
          <div className="eventTxt">
            <h2>THE BEST ICE CREAM</h2>
            <span>For the best party!</span>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop me
              anywhere you like on your page. I’m a great place for you to tell a
              story and let your users know a little more about you.
            </p>
          </div>
         
          <div className="booking-event"></div>
        </div>
      </Fade>
      <div className="paralax-about" />
      <Footer />
    </div>
  )
}

