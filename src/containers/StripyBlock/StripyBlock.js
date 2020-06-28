import React from 'react'
import './StripyBlock.scss'
import StripyBck from '../../resources/image/stripyBck.webp'
import Bck7 from '../../resources/image/bck7.webp'

export default function StripyBlock() {
  return (
    <div className="StripyBlock">
      <img 
        className="stripy-img"
        src={StripyBck}
        alt="Stripy"
      />
      <img 
        className="ice-img"
        src={Bck7}
        alt="double tap"
      />
      <p>#DOUBLE TAP</p>
    </div>
  )
}
