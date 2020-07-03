import React, {Component} from 'react'
import './IceCreamCart.scss'
import Fade from "react-reveal/Fade"
import NavMenu from '../../containers/NavMenu/NavMenu'
import Footer from '../../containers/Footer/Footer'
import ArrowBack from '../../resources/image/icons/chevron_left.svg'
import ButtonEventPg from '../../containers/ButtonEventPg/ButtonEventPg'
import { Link } from 'react-router-dom'
import ErrorWindow  from '../../containers/ErrorWindow/ErrorWindow'

export class IceCreamCart extends Component {
  state = {
    errorMsg: false,
  }

  toggleErrorMsg = () => {
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
    <div className="IceCreamCart">
      <NavMenu />
      <Fade>
        <div className="ice-card">
          <Link to="/book-an-event" className="arrow-back">
            <img src={ArrowBack} alt="back" />
            Back
          </Link>
          <div className="card-txt">
            <h2>ICE CREAM CART</h2>
            <span>4 hrs | $200</span>
            <ButtonEventPg 
              onClick={this.toggleErrorMsg}
              text="Book Now"
            />
            <div className="describe">
              <p>Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.</p>
              <h3>Location & Contact Details</h3>
              <p>Email: tanya.zhukova.95@gmail.com</p>
            </div>
          </div>
          
        </div>
      </Fade>
      <Footer />
      {
        this.state.errorMsg 
        ? <ErrorWindow 
            isOpen={this.state.errorMsg}
            onClose={this.errorCloseHandler}
          /> 
        : null
      }
    </div>
  )}
}

export default IceCreamCart
