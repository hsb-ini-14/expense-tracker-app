const ExpenseTotal = ({ allExpenses, filteredExpenses }) => {
  const filteredTotal = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  );

  const total = allExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="w-full bg-green-200 rounded shadow-xl p-4 flex flex-col sm:flex-row gap-4 justify-between text-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-base font-bold">Filtered Total</h2>
        <h3 className="text-xl text-red-600 font-bold">₹{filteredTotal}</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-base font-bold">Total</h2>
        <h3 className="text-xl text-red-600 font-bold">₹{total}</h3>
      </div>
    </div>
  );
};

export default ExpenseTotal;
