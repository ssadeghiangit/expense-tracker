import TransactionTable from './components/TransactionTable'
import transactions from './data/transactions'

function App() {
  return (
    <main>
      <h1>جیب‌تو</h1>
      <p>مدیریت درآمد و هزینه‌ها</p>

      <TransactionTable
       title="لیست تراکنش‌ها"
       transactions={transactions}
     />
    </main>
  )
}

export default App