import { nanoid } from "nanoid";

const categories = ["Food", "Travel", "Shopping", "Bills", "Others"];

const titleMap = {
  Food: ["Lunch", "Dinner", "Snacks", "Groceries", "Coffee"],
  Travel: ["Cab Ride", "Bus Ticket", "Fuel", "Train Ticket", "Flight"],
  Shopping: ["Clothes", "Shoes", "Accessories", "Online Order", "Electronics"],
  Bills: ["Electricity Bill", "Water Bill", "Internet Bill", "Mobile Recharge"],
  Others: ["Gift", "Donation", "Subscription", "Misc Expense"],
};

const randomAmount = (min = 50, max = 5000) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomTitle = (category) => {
  const titles = titleMap[category];
  return titles[Math.floor(Math.random() * titles.length)];
};

const generateDateForMonth = (monthIndex) => {
  const year = new Date().getFullYear();
  const day = Math.floor(Math.random() * 28) + 1;
  return new Date(year, monthIndex, day).toISOString().split("T")[0];
};

export const seedExpenses = () => {
  const expenses = [];

  for (let month = 0; month < 12; month++) {
    categories.forEach((category) => {
      expenses.push({
        id: nanoid(),
        title: randomTitle(category),
        amount: randomAmount(),
        category,
        date: generateDateForMonth(month),
      });
    });
  }

  return expenses; // total = 60
};
