function formatDate(date) {
  return date.replace(/[0-9]/g, (digit) => '۰۱۲۳۴۵۶۷۸۹'[digit])
}

function formatAmount(amount) {
  return amount.toLocaleString('fa-IR')
}
function TransactionTable({ title, transactions }) {
  return (
    <div>
      <h2 className="table-title">{title}</h2>

    <div className="desktop-table">
      <table>
        <thead>
          <tr>
            <th>تاریخ</th>
            <th>درآمد (تومان)</th>
            <th>هزینه (تومان)</th>
            <th>شرح</th>
          </tr>
        </thead>

        <tbody>
            {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{formatDate(transaction.date)}</td>

              <td className="income">
              {transaction.type === 'income' ? (
              <span dir="ltr">
              +{formatAmount(transaction.amount)}
              </span>
           ) : (
            '-'
              )}
               </td>

        <td className="expense">
            {transaction.type === 'expense' ? (
          <span dir="ltr">
          -{formatAmount(transaction.amount)}
           </span>
            ) : (
              '-'
              )}
            </td>

              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="mobile-transactions">
  {transactions.map((transaction) => (
    <div className="transaction-card" key={transaction.id}>

      <div className="transaction-card-top">
        <span>{formatDate(transaction.date)}</span>

        <span dir="ltr" className={transaction.type}>
          {transaction.type === 'income' ? '+' : '-'}
          {formatAmount(transaction.amount)} تومان
        </span>
      </div>

      <div className="transaction-card-description">
        {transaction.description}
      </div>
    </div>
  ))}
</div>

      <p>تعداد تراکنش‌ها: {transactions.length}</p>
    </div>
  )
}

export default TransactionTable