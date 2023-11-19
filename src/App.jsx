const c = console.log.bind(document)

import './app.scss'

import CreditCard from './components/CreditCard'
import CreditCardTwo from './components/CreditCardTwo'
import CreditCardThree from './components/CreditCardThree'

const App = () => {

  return (
    <main>
      <h2>Zadejte údaje Vaší kreditní karty (pouze čísla)</h2>
      {/* <CreditCard /> */}
      {/* <CreditCardTwo /> */}
      <CreditCardThree />
    </main>
  )
}

export default App
