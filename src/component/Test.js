// import React, { useContext, useEffect, useState } from "react";
// import { Transaction } from "./Transaction";
// import { db } from "../../firebase/firebase";

// import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    db.collection("expense")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTransactions(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

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

// test1
useEffect(() => {
  const getTrans = async () => {
    const transFromFB = await getTransactions();
    setTrans(transFromFB);
  };
  getTrans();

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

console.log(trans);

// test 2
const getItems = (items_id, callback) => {
  let itemRefs = items_id.map((id) => {
    return db.collection("expense").doc(id).get();
  });
  Promise.all(itemRefs)
    .then((docs) => {
      let items = docs.map((doc) => doc.data());
      callback(items);
    })
    .catch((error) => console.log(error));
};

console.log(getItems());

// test 3
// Progress still error looping
const response = db.collection("expense");
const data = await response.get();
data.docs.forEach((doc) => {
  setGetTrans(...getTrans, doc.data());
});

// fetch JSON react
function getMyStory() {
  /* Remove arrow function */

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
  db.collection("story")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let items = doc.data();

        /* Make data suitable for rendering */
        items = JSON.stringify(items);

        /* Update the components state with query result */
        this.setState({ items: items });
      });
    });
}
