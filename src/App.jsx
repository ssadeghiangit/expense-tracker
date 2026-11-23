import TransactionTable from './components/TransactionTable'
import transactions from './data/transactions'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <h1>جیب‌تو</h1>
      <p>مدیریت درآمد و هزینه‌ها</p>

      <TransactionTable
       title="تراکنش‌ها"
       transactions={transactions}
     />
    </main>
  )
}

export default App