const c = console.log.bind(document);

import "./style.scss";

import { useState, useRef, useEffect } from "react";

const CreditCard = () => {

    const firstInputRef = useRef()
    const secondInputRef = useRef()

    /* const pokus = () => {
        c(firstInputRef.current.value.length)
    } */

    const changeFocus = () => {
        if(firstInputRef.current.value.length === 4){
            secondInputRef.current.focus()
        }
    }

    useEffect(() => {
        firstInputRef.current.focus()
    }, [])

  return (
    <form id="credit-card-inputs" onChange={changeFocus}>
    {/* <form id="credit-card-inputs" onChange={pokus}> */}
      <div>
        <input ref={firstInputRef} type="text" maxLength="4" />
        <input ref={secondInputRef} type="text" maxLength="4" />
        <input type="text" maxLength="4" />
        <input type="text" maxLength="4" />
      </div>
    </form>
  )
}

export default CreditCard;
