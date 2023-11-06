const c = console.log.bind(document)

import './style.scss'

import { useState, useRef, useEffect } from 'react'

const CreditCard = () => {

    return (
        <div id='credit-card-inputs'>
            <div>
            <input type="text" maxLength="4"/>
            <input type="text" maxLength="4"/>
            <input type="text" maxLength="4"/>
            <input type="text" maxLength="4"/>
            </div>
        </div>
    )
}

export default CreditCard