import React from 'react'
import Fade from 'react-reveal/Fade'
import './Main.scss'

import NavMenu from '../../containers/NavMenu/NavMenu'
import CenterImgBlock from '../../containers/CenterImgBlock/CenterImgBlock'
import SideImgBlock from '../../containers/SideImgBlock/SideImgBlock'
import StripyBlock from '../../containers/StripyBlock/StripyBlock'
import Footer from '../../containers/Footer/Footer'

import Bck1 from '../../resources/image/bck1.png'
import Bck2 from '../../resources/image/bck2.png'
import Bck3 from '../../resources/image/bck3.png'
import Bck4 from '../../resources/image/bck4.png'
import Bck5 from '../../resources/image/bck5.png'
import Bck6 from '../../resources/image/bck6.png'

export default function Main() {
  return (
    <>
      <div className="main">
        <NavMenu />
        <Fade>
          <CenterImgBlock
            backgroundColor="icecreame-slide"
            image={Bck1}
            textLineOne="HAND CRAFTED"
            textLineTwo="ICE CREAM"
            textBtn="Menu"
            path="/flavors"
            exactBtn={false}
          />
          <SideImgBlock
            imgPosition="left-img"
            image={Bck2}
            sideCaption="OUR FLAVORS"
            sideSubtitle="Fresh n' Tasty!"
            sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
            textBtn="Menu"
            path="/flavors"
            exactBtn={false}
          />
          <CenterImgBlock
            backgroundColor="fruit-slide"
            image={Bck3}
            textLineOne="ENJOY"
            textLineTwo="DAIRY FREE"
            textBtn="Menu"
            path="/flavors"
            exactBtn={false}
          />
          <SideImgBlock
            imgPosition="right-img"
            image={Bck4}
            sideCaption="OUR PLACE"
            sideSubtitle="Ice cream by the sea"
            sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
            textBtn="read more"
            path="/about"
            exactBtn={false}
          />
          <CenterImgBlock
            backgroundColor="candy-slide"
            image={Bck5}
            textLineOne="CATERING & MORE"
            textLineTwo="events"
            textBtn="make a wish"
            path="/book-an-event"
            exactBtn={false}
          />
          <SideImgBlock
            imgPosition="left-img"
            image={Bck6}
            sideCaption="DESSERTS"
            sideSubtitle="Ice cream goodies"
            sideBaseTxt="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. "
            textBtn="Menu"
            path="/flavors"
            exactBtn={false}
          />
          <StripyBlock />
        </Fade>
      </div>
      <Footer />
    </>
  )
}
