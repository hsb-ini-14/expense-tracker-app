import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseFilter from "./components/ExpenseFilter";

const LOCAL_STORAGE_KEY = "expenses";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const [filters, setFilters] = useState({
    category: "All",
    month: "All",
    title: "",
  });

  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = new Date(expense.date).toLocaleString("default", {
      month: "long",
    });

    const categoryMatch =
      filters.category === "All" || expense.category === filters.category;
    const monthMatch =
      filters.month === "All" || expenseMonth === filters.month;
    const titleMatch =
      !filters.title ||
      expense.title.toLowerCase().includes(filters.title.toLowerCase());

    return categoryMatch && monthMatch && titleMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-3 sm:px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-5">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center gap-2">
          <i className="bx bxs-wallet text-green-900"></i>
          <span>Expense Tracker</span>
        </h1>
        <ExpenseForm
          expenses={expenses}
          setExpenses={setExpenses}
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
        />
        <ExpenseTotal
          allExpenses={expenses}
          filteredExpenses={filteredExpenses}
        />
        <ExpenseFilter filters={filters} setFilters={setFilters} />
        <ExpenseList
          filteredExpenses={filteredExpenses}
          expenses={expenses}
          setExpenses={setExpenses}
          setEditingExpense={setEditingExpense}
          editingExpense={editingExpense}
        />
      </div>
    </div>
  );
};

export default App;
