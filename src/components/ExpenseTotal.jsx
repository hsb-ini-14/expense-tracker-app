const ExpenseTotal = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  return (
    <div className="w-full bg-green-200 rounded shadow-xl p-4 flex items-center justify-between">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-base font-bold">Filtered Total</h2>
        <h3 className="text-xl text-red-600 font-bold">₹0</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-base font-bold">Total</h2>
        <h3 className="text-xl text-red-600 font-bold">₹{totalExpenses}</h3>
      </div>
    </div>
  );
};

export default ExpenseTotal;
