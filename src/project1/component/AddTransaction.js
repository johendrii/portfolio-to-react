import React, { useState, useContext } from "react";
import { timestamp } from "../../firebase/firebase";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../context/Project1State";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      fakeKey: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
      timestamp,
    };

    console.log(newTransaction);

    setText("");
    setAmount("");

    addTransaction(newTransaction);
  };

  return (
    <>
      <h5>Add new transaction</h5>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div>
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <Button disabled={!text || !amount} type="submit" variant="primary">
          Add transaction
        </Button>
      </form>
    </>
  );
};
