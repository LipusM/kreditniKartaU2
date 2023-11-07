const c = console.log.bind(document)

import "./style.scss"

import { useState, useRef, useEffect } from "react"

const CreditCard = () => {
  const firstInputRef = useRef()
  const secondInputRef = useRef()
  const thirdInputRef = useRef()
  const fourthInputRef = useRef()

  const changeFocus = (e) => {
    const currentInput = e.target
  
    if (currentInput === firstInputRef.current && currentInput.value.length === 4) {
      secondInputRef.current.focus()
    } else if (currentInput === secondInputRef.current && currentInput.value.length === 4) {
      thirdInputRef.current.focus()
    } else if (currentInput === thirdInputRef.current && currentInput.value.length === 4) {
      fourthInputRef.current.focus()
    }
  
  }

  useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  return (
    <form id="credit-card-inputs">
      <div>
        <input ref={firstInputRef} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={secondInputRef} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={thirdInputRef} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={fourthInputRef} type="text" maxLength="4" onInput={changeFocus}/>
      </div>
    </form>
  )
}

export default CreditCard;
