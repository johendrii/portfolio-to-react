import React, { useContext } from "react";
import { GlobalContext } from "../context/Project1State";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  // .toLocaleString('id');
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  // .toLocaleString('id');

  return (
    <div className="inc-exp-container">
      <div>
        <h6>Income</h6>
        <p className="money plus">Rp{income.toLocaleString("id")}</p>
      </div>
      <div>
        <h6>Expense</h6>
        <p className="money minus">
          Rp{Math.abs(expense).toLocaleString("id")}
        </p>
      </div>
    </div>
  );
};
