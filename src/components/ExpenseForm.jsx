import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const categories = ["Food", "Travel", "Shopping", "Bills", "Others"];

const ExpenseForm = ({
  expenses,
  setExpenses,
  editingExpense,
  setEditingExpense,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    if (editingExpense) {
      reset({
        title: editingExpense.title,
        amount: editingExpense.amount,
        category: editingExpense.category,
        date: editingExpense.date,
      });
    } else {
      reset({
        title: "",
        amount: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
      });
    }
  }, [editingExpense, reset]);

  const submitHandler = (data) => {
    if (editingExpense) {
      const updatedExpenses = expenses.map((expense) =>
        expense.id === editingExpense.id
          ? { ...expense, ...data, amount: Number(data.amount) }
          : expense,
      );

      setExpenses(updatedExpenses);
      setEditingExpense(null);
    } else {
      const newExpense = {
        id: nanoid(),
        title: data.title,
        amount: Number(data.amount),
        category: data.category,
        date: data.date,
      };
      setExpenses([newExpense, ...expenses]);
    }
    reset();
  };

  return (
    <form
      className="w-full bg-purple-200 rounded shadow-xl space-y-4 p-4 sm:p-6"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left">
        {editingExpense ? "Edit Expense" : "Add Expense"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <input
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
            type="text"
            placeholder="Title"
            className="border p-2 rounded"
          />
          <small
            className={`text-red-600 text-sm min-h-5 transition-opacity duration-200 ${
              errors.title ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.title?.message || "placeholder"}
          </small>
        </div>
        <div className="flex flex-col">
          <input
            {...register("amount", {
              required: "Amount is required",
              valueAsNumber: true,
              validate: (value) => value > 0 || "Amount must be greater than 0",
            })}
            type="text"
            placeholder="Amount"
            className="border p-2 rounded"
          />
          <small
            className={`text-red-600 text-sm min-h-5 transition-opacity duration-200 ${
              errors.amount ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.amount?.message || "placeholder"}
          </small>
        </div>
        <div className="flex flex-col">
          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="border p-2 rounded bg-purple-200"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <small
            className={`text-red-600 text-sm min-h-5 transition-opacity duration-200 ${
              errors.category ? "opacity-100" : "opacity-0"
            }`}
          >
            {errors.category?.message || "placeholder"}
          </small>
        </div>
        <div className="flex flex-col">
          <input
            {...register("date", {
              required: "Date is required",
              validate: (value) =>
                new Date(value) <= new Date() || "Date cannot be in the future",
            })}
            type="date"
            className="border p-2 rounded"
          />
          {errors.date && (
            <small
              className={`text-red-600 text-sm min-h-5 transition-opacity duration-200 ${
                errors.date ? "opacity-100" : "opacity-0"
              }`}
            >
              {errors.date?.message || "placeholder"}
            </small>
          )}
        </div>
      </div>
      <button className="w-full sm:w-48 py-2 rounded bg-blue-600 hover:bg-blue-700 font-bold text-white">
        {editingExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default ExpenseForm;
