const c = console.log.bind(document)

const CardNumberInput = ({refInput, chosen}) => {

    const numbersOnly = (e) => {
        if(isNaN(e.key) && e.key !== 'Backspace' || e.key === " ") {
          e.preventDefault();
        }
      }

    return (
        <>
        <input ref={refInput} type="text" maxLength="4" onKeyDown={numbersOnly} onChange={chosen}/>
        </>
    )
}

export default CardNumberInput