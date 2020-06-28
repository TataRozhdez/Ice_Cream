import React from 'react'
import './MyButton.scss'
import { NavLink } from 'react-router-dom'

export default function MyButton(props) {
  const classes = [
    'MyButton',
    props.classStyle
  ]

  return (
    <div className={classes.join(' ')}>
        <NavLink 
          to="/"
          exact={props.exact}
        >
          {props.text}
        </NavLink>
    </div>
  )
}
