import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
      // here with the help of object destructuring I am adding the data got from expense form to expesne data along with that I am also adding id as new element in objet expenseData
    };
    props.onAddExpense(expenseData);
    //upar ka tarik us tarah hai jaise humne newform se data ne expense mai bheja tha
    // console.log(enteredExpenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {/* <form></form> instead of making form over here we created it in ExpenseForm and suing it here below*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
