function TransactionTable({ title, transactions }) {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
             {transactions.map((transaction) => (
              <li key={transaction.id}>
               {transaction.description} - {transaction.amount}
             </li>
           ))}
          </ul>
            <p>تعداد تراکنش‌ها: {transactions.length}</p>
        </div>
    )
}

export default TransactionTable