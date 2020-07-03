import React from 'react'
import './ButtonEventPg.scss'

export default function ButtonEventPg(props) {
  return (
    <button 
      className="btn-book-event" 
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
