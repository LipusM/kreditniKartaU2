const c = console.log.bind(document);

import "./style.scss";

import { useState, useRef, useEffect } from "react";

const pokus = () => {
    c("hello world!")
}

const CreditCard = () => {
  return (
    <form id="credit-card-inputs" onChange={pokus}>
      <div>
        <input type="text" maxLength="4" />
        <input type="text" maxLength="4" />
        <input type="text" maxLength="4" />
        <input type="text" maxLength="4" />
      </div>
    </form>
  )
}

export default CreditCard;
