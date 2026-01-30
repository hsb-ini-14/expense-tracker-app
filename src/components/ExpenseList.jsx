const ExpenseList = ({
  filteredExpenses,
  expenses,
  setExpenses,
  setEditingExpense,
  editingExpense,
}) => {
  if (filteredExpenses.length === 0) {
    return <p className="text-center text-gray-500">No Expenses Added Yet</p>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setEditingExpense((prev) => (prev?.id === id ? null : prev));
  };

  return (
    <div className="w-full bg-orange-200 rounded shadow-xl p-4 space-y-1">
      <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
        Expense List
      </h2>
      {filteredExpenses.map((expense) => (
        <div
          key={expense.id}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-1 transition-all ${editingExpense?.id === expense.id ? "bg-yellow-200 ring-2 ring-yellow-300 rounded" : ""}`}
        >
          <div className="flex items-center justify-center border">
            <h3 className="font-semibold">{expense.title}</h3>
          </div>
          <div className="flex items-center justify-center border">
            <p className="font-bold text-green-600">₹{expense.amount}</p>
          </div>
          <div className="flex items-center justify-center border">
            <p className="text-sm text-gray-500">
              {expense.category} • {formatDate(expense.date)}
            </p>
          </div>
          <div className="p-1 flex items-end justify-between px-2">
            <button
              onClick={() => setEditingExpense(expense)}
              className="text-white px-2 py-1 bg-blue-500 font-bold hover:bg-blue-600 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(expense.id)}
              className="text-white px-2 py-1 bg-red-500 font-bold hover:bg-red-600 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
