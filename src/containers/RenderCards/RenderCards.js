import React from 'react'
import './RenderCards.scss'

export default function RenderCards(props) {
  const card = props.cards.map((i, index)=> (
    <li key={index}>
      <img src={i.img} alt={i.name} />
      <h4>{i.name}</h4>
      <span>_______________</span> 
      <p>{i.description}</p>
      <h4>{i.price}</h4>
    </li>
  ))

  return (
    <div className="RenderCards">
      <h3>{props.title}</h3>
      <span>__________________</span> 
      <ul>
        {card}
      </ul>
    </div>
  )
}
