import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#845EC2",
  "#D65DB1",
];

const ExpenseCharts = ({ expenses }) => {
  // Prepare data for charts
  const categoryData = getCategoryData(expenses);
  const monthlyData = getMonthlyData(expenses);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Expenses by Category (PieChart):
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Monthly Expenses (Bar Chart):
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="amount" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

/* ---------- Helper Functions ---------- */

// Category-wise total
const getCategoryData = (expenses) => {
  const map = {};

  expenses.forEach((item) => {
    if (map[item.category]) {
      map[item.category] += Number(item.amount);
    } else {
      map[item.category] = Number(item.amount);
    }
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};

// Month-wise total
const getMonthlyData = (expenses) => {
  const map = {};

  expenses.forEach((item) => {
    const date = new Date(item.date);
    const month = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });

    if (map[month]) {
      map[month] += Number(item.amount);
    } else {
      map[month] = Number(item.amount);
    }
  });

  return Object.keys(map).map((key) => ({
    month: key,
    amount: map[key],
  }));
};

export default ExpenseCharts;
