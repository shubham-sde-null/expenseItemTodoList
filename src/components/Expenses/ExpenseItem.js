import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [newTitle, newsetTitle] = useState("    ");
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle(newTitle);
  // };
  // const changeHandler = (event) => {
  //   newsetTitle(event.target.value);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* yaha maine ek component use kiya aur uske andar ek attribute date add kar diya, mujhe yeh attribute app se mil raha hai aur mujhe hamare expensedate mai bas iska date chahiye toh mai props.date curly bracketts ke andar daal diya */}
      <div className="expense-item__description">
        {/* <h2>{title}</h2> */}
        <h2>{props.title}</h2>
        {/* here I added data in curly brackets through variable */}
        <div className="expense-item__price"> ${props.amount} </div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler} />
      <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
