import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseFilter from "./components/ExpenseFilter";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [filters, setFilters] = useState([
    {
      category: "All",
      month: "All",
      title: "",
    },
  ]);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-6">
      <div className="mx-auto p-6 flex flex-col gap-10">
        <h1 className="text-center flex justify-center items-center gap-2 text-4xl font-bold">
          <i className="bx bxs-wallet text-green-900"></i>
          <span>Expense Tracker</span>
        </h1>
        <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpenseTotal expenses={expenses} />
        <ExpenseFilter filters={filters} setFilters={setFilters} />
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
};

export default App;
