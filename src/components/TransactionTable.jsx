function TransactionTable({ title, transactions }) {
  return (
    <div>
      <h2>{title}</h2>

      <table>
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد</th>
            <th>هزینه</th>
            <th>شرح</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>

              <td>
                {transaction.type === 'income'
                 ? transaction.amount.toLocaleString('fa-IR')
                 : '-'}
              </td>

              <td>
                {transaction.type === 'expense'
                 ? transaction.amount.toLocaleString('fa-IR')
                 : '-'}
              </td>

              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>تعداد تراکنش‌ها: {transactions.length}</p>
    </div>
  )
}

export default TransactionTable