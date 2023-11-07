const c = console.log.bind(document);

import "./style.scss";

import { useState, useRef, useEffect } from "react";

const CreditCard = () => {
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();

  const changeFocus = () => {
    if (firstInputRef.current.value.length === 4) {
      secondInputRef.current.focus();
    } 
    
    if (secondInputRef.current.value.length === 4) {
      thirdInputRef.current.focus();
    } 
    
    if (thirdInputRef.current.value.length === 4) {
      fourthInputRef.current.focus();
    } 
  }

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  return (
    <form id="credit-card-inputs">
    {/* <form id="credit-card-inputs" onChange={changeFocus}> */}
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
