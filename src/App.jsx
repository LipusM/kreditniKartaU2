const c = console.log.bind(document)

import './app.scss'

import CreditCard from './components/CreditCard'

const App = () => {

  return (
    <main>
      <h2>Zadejte údaje Vaší kreditní karty</h2>
      <CreditCard />
    </main>
  )
}

export default App
