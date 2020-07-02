import React from 'react'
import './TextCenterBlock.scss'
import Fade from 'react-reveal/Fade'

export default function TextCenterBlock(props) {
  const cls = [
    'TextCenterBlock',
    props.bck
  ]

  return (
    <div className={cls.join(' ')}>
      <h1 className="txtLineFirst">{props.txtLineFirst}</h1>
      <Fade top cascade>
        <span className="txtLineSecond">{props.txtLineSecond}</span>
      </Fade>
    </div>
  )
}
