import React from 'react'
import './SideImgBlock.scss'
import MyButton from '../MyButton/MyButton'
import Fade from 'react-reveal/Fade'

export default function SideImgBlock(props) {
  const classes = [
    'SideImgBlock',
    props.imgPosition
  ]

  return (
    <div 
      className={classes.join(' ')}
    >
      <img src={props.image} alt="background" />
      <Fade top cascade>
        <div className="side-block-text">
          <span className="side-caption">{props.sideCaption}</span>
          <p className="side-subtitle">{props.sideSubtitle}</p>
          <p className="side-base-txt"> {props.sideBaseTxt}</p>
          <MyButton 
            classStyle="black"
            text={props.textBtn}
            to={props.path}
            exact={props.exactBtn}
          />
        </div>
      </Fade>
    </div>
    
  )
}
