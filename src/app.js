import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 350,
    date: new Date(2021, 2, 22),
  },
  {
    id: "e3",
    title: "Bank",
    amount: 750,
    date: new Date(2021, 10, 12),
  },
  {
    id: "e4",
    title: "Food",
    amount: 550,
    date: new Date(2021, 8, 8),
  },
];

// function App(){} ==> this was function declaration which was used earlier, but now er are changing it with arrow function
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  //   let expenseDate = new Date(2021, 3, 28);
  //   let expenseTitle = "School Fee";
  //   let expenseAmount = 300;
  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];

    // yaha par jo expense hai woh hume child se mil raha hai jo expense.js hai aur jo newexpenses hai usko humne usestate se laya hai toh abhi hamare pass do cheez aa gayai hai new values aur purani values
    setExpenses(updatedExpenses);
    // abb yeh function kya karta hai updatedexpenses ki values change kar deta hai
    // console.log(expense);
  };
  // the above function is made to receive data from the child which is new expense
  return (
    <div>
      {/* <h1>Lets Get Started</h1> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};
export default App;
