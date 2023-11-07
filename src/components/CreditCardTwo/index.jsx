const c = console.log.bind(document)

import "./style.scss"

import { useState, useRef, useEffect } from "react"

const CreditCardTwo = () => {
  const inputsRef = useRef({
    firstInput: null,
    secondInput: null,
    thirdInput: null,
    fourthInput: null,
  })

  const changeFocus = (e) => {
    const currentInput = e.target

    if (currentInput === inputsRef.current.firstInput && currentInput.value.length === 4) {
      inputsRef.current.secondInput.focus()
    } else if (currentInput === inputsRef.current.secondInput && currentInput.value.length === 4) {
      inputsRef.current.thirdInput.focus()
    } else if (currentInput === inputsRef.current.thirdInput && currentInput.value.length === 4) {
      inputsRef.current.fourthInput.focus()
    }
  }

  useEffect(() => {
    inputsRef.current.firstInput.focus()
  }, [inputsRef.current.firstInput])

  return (
    <form id="credit-card-inputs">
      <div>
        <input ref={el => inputsRef.current.firstInput = el} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={el => inputsRef.current.secondInput = el} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={el => inputsRef.current.thirdInput = el} type="text" maxLength="4" onInput={changeFocus}/>
        <input ref={el => inputsRef.current.fourthInput = el} type="text" maxLength="4" onInput={changeFocus}/>
      </div>
    </form>
  )
}

export default CreditCardTwo;
