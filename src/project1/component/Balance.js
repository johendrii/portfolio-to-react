import React, { useContext } from "react";
import { GlobalContext } from "../context/Project1State";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h6>Your Balance</h6>
      <h3>Rp {total.toLocaleString("id")}</h3>
    </div>
  );
};
