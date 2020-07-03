import React from 'react'
import NavMenu from '../../containers/NavMenu/NavMenu'
import Fade from "react-reveal/Fade"
import TextCenterBlock from '../../containers/TextCenterBlock/TextCenterBlock'
import './Flavors.scss'
import RenderCards from '../../containers/RenderCards/RenderCards'

import creamImg1 from '../../resources/image/ice_cards/cream_flavors/1.jpg'
import creamImg2 from '../../resources/image/ice_cards/cream_flavors/2.jpg'
import creamImg3 from '../../resources/image/ice_cards/cream_flavors/3.jpg'
import creamImg4 from '../../resources/image/ice_cards/cream_flavors/4.jpg'
import creamImg5 from '../../resources/image/ice_cards/cream_flavors/5.png'
import creamImg6 from '../../resources/image/ice_cards/cream_flavors/6.jpg'

export default function Flavors() {
  const creamFlavors = [
    {
      img: creamImg1,
      name: "OREO",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: creamImg2,
      name: "CHOCOLATE & SEA SALT",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: creamImg3,
      name: "VANILLA STRAWBERRY",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: creamImg4,
      name: "CHERRY CHEESECAKE",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: creamImg5,
      name: "PISTACHIO",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: creamImg6,
      name: "HAZELNUT & COOKIES",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    }
  ]

  return (
    <div className="Flavors">
      <NavMenu />
      <Fade>
        <TextCenterBlock 
          bck="FlavorsPg"
          txtLineFirst="OUR"
          txtLineSecond="FLAVORS"
        />
        <RenderCards 
          title="ICE CREAM FLAVORS"
          cards={creamFlavors}
        />
      </Fade>
    </div>
  )
}
