const c = console.log.bind(document)

import "./style.scss"

import { useRef, useEffect } from "react"


const CreditCardTwo = () => {
  const inputsRef = useRef({
    firstInput: null,
    secondInput: null,
    thirdInput: null,
    fourthInput: null,
  })

  //Fce zajišťující focus na inputy dle podmínek
  const changeFocus = (e) => {
    const currentInput = e.target

        //Porovnávám, jestli refInputu se rovná aktivnímu inputu. Zjišťuji délku inputu.
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

  //Funkce umožňující psát pouze čísla (zdroj: https://awik.io/allow-numbers-input-field-javascript/)
  const numbersOnly = (e) => {
    if(isNaN(e.key) && e.key !== 'Backspace' || e.key === " ") {
      e.preventDefault();
    }
  }

  return (
    <form id="credit-card-inputs">
      <div>
        <input ref={el => inputsRef.current.firstInput = el} type="text" maxLength="4" onChange={changeFocus} onKeyDown={numbersOnly}/>
        <input ref={el => inputsRef.current.secondInput = el} type="text" maxLength="4" onChange={changeFocus} onKeyDown={numbersOnly}/>
        <input ref={el => inputsRef.current.thirdInput = el} type="text" maxLength="4" onChange={changeFocus} onKeyDown={numbersOnly}/>
        <input ref={el => inputsRef.current.fourthInput = el} type="text" maxLength="4" onChange={changeFocus} onKeyDown={numbersOnly}/>
      </div>
    </form>
  )
}

export default CreditCardTwo;
