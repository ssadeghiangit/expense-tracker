import TransactionTable from './components/TransactionTable'
import transactions from './data/transactions'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <TransactionTable title="تراکنش‌ها" transactions={transactions} />
    </main>
  )
}

export default App
