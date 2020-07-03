import React from "react"
import './ErrorWindow.scss'
import Fade from "react-reveal/Fade"
import ButtonEventPg from "../ButtonEventPg/ButtonEventPg"

export default function ErrorWindow(props) {
  const cls = ["error-window"]
  if (props.isOpen) {
    cls.push("isOpen")
  }

  return (
    <Fade top cascade>
      <div className={cls.join(" ")} onClick={props.onClose}>
        <div className="error-window-txt">
          <span onClick={props.onClose}>&#215;</span>
          <p>
            Sorry, this service is not yet available for online bookings. Please
            contact us for more information.
          </p>
          <ButtonEventPg 
            onClick={props.onClose}
            text="Got it"
          />
        </div>
      </div>
    </Fade>
  )
}
