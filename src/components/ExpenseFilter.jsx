import { useForm } from "react-hook-form";

const categories = ["All", "Food", "Travel", "Shopping", "Bills", "Others"];

const months = [
  "All",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ExpenseFilter = ({ filters, setfilters }) => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <form className="w-full bg-pink-200 rounded shadow-xl space-y-4 p-4">
      <h2 className="text-2xl font-bold">Filter By:</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="flex flex-col">
          <label className="">Category:</label>
          <select
            {...register("category")}
            className="border p-2 rounded bg-pink-200"
          >
            {categories.map((cat, index) => (
              <option key={index}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="">Month:</label>
          <select
            {...register("month")}
            className="border p-2 rounded bg-pink-200"
          >
            {months.map((month, index) => (
              <option key={index}>{month}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="">Title:</label>
          <input
            {...register("titleFilter")}
            className="border p-2 rounded"
            placeholder="Title"
            type="text"
          />
        </div>
        <div className="p-1 flex items-end justify-end">
          <button className="px-2 py-1 rounded font-bold text-white bg-blue-600 hover:bg-blue-700">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseFilter;
