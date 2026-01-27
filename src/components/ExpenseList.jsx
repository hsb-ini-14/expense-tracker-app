const ExpenseList = ({ expenses, setExpenses }) => {
  if (expenses.length === 0) {
    return <p className="text-center text-gray-500">No Expenses Added Yet</p>;
  }

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="w-full bg-orange-200 rounded shadow-xl p-4 space-y-3">
      <h2 className="text-2xl font-bold">Expense List</h2>
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex justify-between items-center border-b pb-2"
        >
          <div>
            <h3 className="font-semibold">{expense.title}</h3>
            <p className="text-sm text-gray-500">
              {expense.category} • {expense.date}
            </p>
          </div>

          <p className="font-bold text-red-600">₹{expense.amount}</p>
          <button
            onClick={() => handleDelete(expense.id)}
            className="text-white px-2 py-1 bg-red-500 font-bold hover:bg-red-600 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
