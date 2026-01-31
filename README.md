# Expense Tracker App

A modern and responsive **Expense Tracker Application** built with **React, Vite, and Tailwind CSS**.
This project helps users track, filter, and analyze their daily expenses with interactive charts and summaries.

🔗 **Live Demo:** [https://hsb-ini-14.github.io/expense-tracker/](https://hsb-ini-14.github.io/expense-tracker-app/)

---

## ✨ Features

* 💰 Add, edit, and delete expenses
* 📊 Visual expense analytics with charts
* 🔍 Filter expenses by category and date
* 📈 Automatic total calculation
* 📱 Fully responsive design
* 🎨 Clean UI built with Tailwind CSS
* ⚡ Fast performance using Vite

---

## 🛠️ Tech Stack

* **React** – UI components & state management
* **Vite** – Fast build tool & dev server
* **Tailwind CSS** – Utility-first styling
* **Chart Library** – Expense visualization
* **GitHub Pages** – Deployment

---

## 📁 Project Structure

```text
expense-tracker/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── ExpenseFilter.jsx
│   │   ├── ExpenseTotal.jsx
│   │   └── ExpenseCharts.jsx
│   ├── data/
│   │   └── seedExpenses.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hsb-ini-14/expense-tracker-app.git
cd expense-tracker
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🌍 Deployment to GitHub Pages

This project is deployed using **gh-pages**.

### Steps used:

1. Install gh-pages

```bash
npm install --save-dev gh-pages
```

2. Set base path in `vite.config.js`

```js
export default defineConfig({
  base: "/expense-tracker-app/",
});
```

3. Add scripts to `package.json`

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy

```bash
npm run deploy
```

---

## 🧩 How It Works

* Expenses are stored in a centralized state and initialized using `seedExpenses.js`
* Users can add new expenses through the `ExpenseForm` component
* `ExpenseList` displays all recorded expenses
* `ExpenseFilter` allows filtering by category or date
* `ExpenseTotal` calculates and displays total spending
* `ExpenseCharts` visualizes expense data using charts

---

## 📸 Preview

> to be added

---

## 🙌 Acknowledgements

* Styling powered by [Tailwind CSS](https://tailwindcss.com/)
* Build tool by [Vite](https://vitejs.dev/)
* Charts inspired by modern financial dashboards

---

## 👤 Author

**Harsh Singh Bhaduria**

* GitHub: [https://github.com/hsb-ini-14](https://github.com/hsb-ini-14)

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub — it really helps! 😊
