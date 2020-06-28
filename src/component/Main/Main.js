import React, { Component } from 'react'
import './Main.scss'
import NavMenu from '../../containers/NavMenu/NavMenu'
import CenterImgBlock from '../../containers/CenterImgBlock/CenterImgBlock'
import SideImgBlock from '../../containers/SideImgBlock/SideImgBlock'
import StripyBlock from '../../containers/StripyBlock/StripyBlock'
import Bck1 from '../../resources/image/bck1.webp'
import Bck2 from '../../resources/image/bck2.webp'
import Bck3 from '../../resources/image/bck3.webp'
import Bck4 from '../../resources/image/bck4.webp'
import Bck5 from '../../resources/image/bck5.webp'
import Bck6 from '../../resources/image/bck6.webp'
import Chat from '../../resources/image/icons/chat1.png'
import Footer from '../../containers/Footer/Footer'

export class Main extends Component {
  render() {
    return (
      <>
      <div className="main">
        <NavMenu 
          backgroundColor="home-page"
        />
        <CenterImgBlock 
          backgroundColor="icecreame-slide"
          image={Bck1}
          textLineOne="HAND CRAFTED"
          textLineTwo="ICE CREAM"
          textBtn="Menu"
          exactBtn={true}
        />
        <SideImgBlock 
          imgPosition="left-img"
          image={Bck2}
          sideCaption="OUR FLAVORS"
          sideSubtitle="Fresh n' Tasty!"
          sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
          textBtn="Menu"
          exactBtn={true}
        />
        <CenterImgBlock 
          backgroundColor="fruit-slide"
          image={Bck3}
          textLineOne="ENJOY"
          textLineTwo="DAIRY FREE"
          textBtn="Menu"
          exactBtn={true}
        />
        <SideImgBlock 
          imgPosition="right-img"
          image={Bck4}
          sideCaption="OUR PLACE"
          sideSubtitle="Ice cream by the sea"
          sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
          textBtn="read more"
          exactBtn={true}
        />
        <CenterImgBlock 
          backgroundColor="candy-slide"
          image={Bck5}
          textLineOne="CATERING & MORE"
          textLineTwo="events"
          textBtn="make a wish"
          exactBtn={true}
        />
        <SideImgBlock 
          imgPosition="left-img"
          image={Bck6}
          sideCaption="DESSERTS"
          sideSubtitle="Ice cream goodies"
          sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. "
          textBtn="Menu"
          exactBtn={true}
        />
        <StripyBlock />
      </div>
      <Footer />
      <button className="chat-btn">
        <img
          src={Chat}
          alt="Chat"
        />
      </button>
      </>
    )
  }
}

export default Main
