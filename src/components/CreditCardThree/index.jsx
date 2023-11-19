
import "./style.scss"

import { useRef, useEffect } from "react"
import CardNumberInput from "../CardNumberInput"


const CreditCardThree = () => {
  const inputsRef = useRef({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fourthInput: "",
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


  return (
    <div id="credit-card-inputs">
      <div id="credit-card-input">
        <CardNumberInput refInput={el => inputsRef.current.firstInput = el} chosen={changeFocus}/>
        <CardNumberInput refInput={el => inputsRef.current.secondInput = el} chosen={changeFocus}/>
        <CardNumberInput refInput={el => inputsRef.current.thirdInput = el} chosen={changeFocus}/>
        <CardNumberInput refInput={el => inputsRef.current.fourthInput = el} chosen={changeFocus}/>
      </div>
    </div>
  )
}

export default CreditCardThree;
