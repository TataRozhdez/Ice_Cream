import React from 'react'
import './MyButton.scss'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

export default function MyButton(props) {
  const classes = [
    'MyButton',
    props.classStyle
  ]
  const p = `${props.to}`
  
  return (
    <Fade top>
    <div className={classes.join(' ')}>
        <NavLink 
          to={p}
          exact={props.exact}
        >
          {props.text}
        </NavLink>
    </div>
    </Fade>
  )
}
