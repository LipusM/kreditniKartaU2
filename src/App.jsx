const c = console.log.bind(document)

import './app.scss'

import CreditCard from './components/CreditCard'
import CreditCardTwo from './components/CreditCardTwo'

const App = () => {

  return (
    <main>
      <h2>Zadejte údaje Vaší kreditní karty</h2>
      {/* <CreditCard /> */}
      <CreditCardTwo />
    </main>
  )
}

export default App
