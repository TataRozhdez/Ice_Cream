import React from 'react'
import './CenterImgBlock.scss'
import MyButton from '../MyButton/MyButton'
import { Parallax } from 'react-scroll-parallax'

export default function CenterImgBlock(props) {
  const classes = [
    'CenterImgBlock',
    props.backgroundColor
  ]

  const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
        <img src={props.image} alt="background" />
    </Parallax>
  )

  return (
    <div 
      className={classes.join(' ')}
    >
      <div className="center-block-text">
        <p className="text-line-one">{props.textLineOne}</p>
        <h1 className="text-line-two">{props.textLineTwo}</h1>
      </div> 
      {ParallaxImage()}
      <MyButton 
        to={props.path}
        classStyle="white"
        text={props.textBtn}
        exact={props.exactBtn}
      />
    </div>
  )
}
