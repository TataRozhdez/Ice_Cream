import React, { Component } from "react"
import "./Events.scss"
import Fade from "react-reveal/Fade"
import NavMenu from "../../containers/NavMenu/NavMenu"
import Footer from "../../containers/Footer/Footer"
import TextCenterBlock from "../../containers/TextCenterBlock/TextCenterBlock"
import { Link } from "react-router-dom"
import ErrorWindow from "../../containers/ErrorWindow/ErrorWindow"

export class Events extends Component {
  state = {
    errorMsg: false,
  }

  toggleErrorMsg = () => {
    console.log(this.state)
    this.setState({
      errorMsg: !this.state.errorMsg,
    })
  }

  errorCloseHandler = () => {
    this.setState({
      errorMsg: false,
    })
  }

  render() {
    return (
      <React.Fragment>
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
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
            </div>
            <div className="booking-event">
              <Link to="/bookings-checkout/ice-cream-cart">
                <h3>ICE CREAM CART</h3>
              </Link>
              <p>4 hr</p>
              <p>$200</p>
              <button 
                className="btn-book-event" 
                onClick={this.toggleErrorMsg}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </Fade>
        <div className="paralax-about" />
        <Footer />
      </div>
      {
        this.state.errorMsg 
        ? <ErrorWindow 
            isOpen={this.state.errorMsg}
            onClose={this.errorCloseHandler}
          /> 
        : null
      }
      </React.Fragment>
    )
  }
}

export default Events
