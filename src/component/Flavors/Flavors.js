import React from 'react'
import NavMenu from '../../containers/NavMenu/NavMenu'
import Fade from "react-reveal/Fade"
import TextCenterBlock from '../../containers/TextCenterBlock/TextCenterBlock'
import './Flavors.scss'
import RenderCards from '../../containers/RenderCards/RenderCards'
import Footer from '../../containers/Footer/Footer'

import creamImg1 from '../../resources/image/ice_cards/cream_flavors/1.jpg'
import creamImg2 from '../../resources/image/ice_cards/cream_flavors/2.jpg'
import creamImg3 from '../../resources/image/ice_cards/cream_flavors/3.jpg'
import creamImg4 from '../../resources/image/ice_cards/cream_flavors/4.jpg'
import creamImg5 from '../../resources/image/ice_cards/cream_flavors/5.png'
import creamImg6 from '../../resources/image/ice_cards/cream_flavors/6.jpg'

import dairyFreeImg1 from '../../resources/image/ice_cards/dairy_free_flavors/1.jpg'
import dairyFreeImg2 from '../../resources/image/ice_cards/dairy_free_flavors/2.jpg'
import dairyFreeImg3 from '../../resources/image/ice_cards/dairy_free_flavors/3.jpg'
import dairyFreeImg4 from '../../resources/image/ice_cards/dairy_free_flavors/4.jpg'
import dairyFreeImg5 from '../../resources/image/ice_cards/dairy_free_flavors/5.jpg'
import dairyFreeImg6 from '../../resources/image/ice_cards/dairy_free_flavors/6.jpg'

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
      description: "Fresh tuna tataki, sun gold cherry tomatoes & organic greens",
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

  const dairyFreeFlavors = [
    {
      img: dairyFreeImg1,
      name: "SALTED CARAMEL SOY",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: dairyFreeImg2,
      name: "BRAMBLEBERRY SORBET",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: dairyFreeImg3,
      name: "BANAN $ HONEY",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: dairyFreeImg4,
      name: "RASPBERRY SORBET",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: dairyFreeImg5,
      name: "STRAWBERRY SORBET",
      description: "This is an item on your menu. Give your item a brief description",
      price: "$9"
    },
    {
      img: dairyFreeImg6,
      name: "LIME SORBET",
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
        <RenderCards 
          title="DAIRY FREE FLAVORS"
          cards={dairyFreeFlavors}
        />
      </Fade>
      <Footer />
    </div>
  )
}
