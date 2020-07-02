import React from 'react'
import './StripyBlock.scss'
import StripyBck from '../../resources/image/stripyBck.png'
import Bck7 from '../../resources/image/bck7.png'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-scroll-parallax'

const ParallaxImage = () => (
  <Parallax className="custom-class" x={[-20, 20]} tagInner="figure">
    <img className="stripy-img" src={StripyBck} alt="background" />
  </Parallax>
)

export default function StripyBlock() {
  return (
    <div className="StripyBlock">
      {ParallaxImage()}
      <img 
        className="ice-img"
        src={Bck7}
        alt="double tap"
      />
      <Fade top cascade>
        <p>#DOUBLE TAP</p>
      </Fade>
    </div>
  )
}
