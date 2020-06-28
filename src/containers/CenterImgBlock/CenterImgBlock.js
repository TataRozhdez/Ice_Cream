import React from 'react'
import './CenterImgBlock.scss'
import MyButton from '../MyButton/MyButton'

export default function CenterImgBlock(props) {
  const classes = [
    'CenterImgBlock',
    props.backgroundColor
  ]

  return (
    <div 
      className={classes.join(' ')}
    >
      <img src={props.image} alt="background" />
      <div className="center-block-text">
        <p className="text-line-one">{props.textLineOne}</p>
        <h1 className="text-line-two">{props.textLineTwo}</h1>
      </div> 
      <MyButton 
        classStyle="white"
        text={props.textBtn}
        exact={props.exactBtn}
      />
    </div>
  )
}
