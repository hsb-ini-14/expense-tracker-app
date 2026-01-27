import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const categories = ["Food", "Travel", "Shopping", "Bills", "Others"];

const ExpenseForm = ({ expenses, setExpenses }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    const newExpense = {
      id: nanoid(),
      title: data.title,
      amount: Number(data.amount),
      category: data.category,
      date: data.date,
    };

    setExpenses([...expenses, newExpense]);

    reset();
  };

  return (
    <form
      className="w-full bg-purple-200 rounded shadow-xl space-y-4 p-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-2xl font-bold">Add Expense</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
        />
        <input
          {...register("amount")}
          type="text"
          placeholder="Amount"
          className="border p-2 rounded"
          min={0}
        />
        <select
          {...register("category")}
          className="border p-2 rounded bg-purple-200"
        >
          {categories.map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>
        <input
          {...register("date")}
          type="date"
          className="border p-2 rounded"
        />
      </div>
      <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 font-bold text-white shadow-2xl">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
