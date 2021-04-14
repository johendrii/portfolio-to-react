import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/Project1State";
// import { db } from "../../firebase/firebase";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  // const [firstLoad, getFirstLoad] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   db.collection("expense")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       let documents = [];
  //       snapshot.forEach((doc) => {
  //         documents.push({ ...doc.data(), id: doc.id });
  //       });
  //       getFirstLoad(documents);
  //     });
  //   console.log(firstLoad);
  //   setLoading(false);
  // }, []);

  // console.log(firstLoad);

  useEffect(() => {
    // const getTrans = async () => {
    //   await getTransactions();
    // };
    // getTrans();

    getTransactions();

    // console.log("inside useeffect", transactions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  // getTransactions();

  return (
    <>
      <h5>History</h5>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
