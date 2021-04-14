import React, { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import { db } from "../../firebase/firebase";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [getTrans, setGetTrans] = useState([]);
  // const [error, setError] = useState(console.log(getTrans));

  // Actions
  async function getTransactions() {
    // db.collection("expense")
    //   .orderBy("timestamp", "desc")
    //   .get()
    //   .then((querySnapshot) => {
    //     let documents = [];
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       documents.push({ ...doc.data(), id: doc.id });
    //       // console.log("inside fetch db", documents);
    //       setGetTrans(documents);
    //     });
    //   });
    await db
      .collection("expense")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setGetTrans(documents);
      });

    // await db
    //   .collection("expense")
    //   .orderBy("timestamp", "desc")
    //   .get()
    //   .then((querySnapshot) => {
    //     let documents = [];
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       documents.push({ ...doc.data(), id: doc.id });
    //       // console.log("inside fetch db", documents);
    //       setGetTrans(documents);
    //     });
    //   });

    // const res = await getTrans;

    // setError(getTrans === [] ? error : "");

    dispatch({
      type: "GET_TRANSACTIONS",
      payload: getTrans,
    });
  }

  async function deleteTransaction(id) {
    await db.collection("expense").doc(id).delete();

    dispatch({
      type: "DELETE TRANSACTION",
      payload: id,
    });
  }

  async function addTransaction(transaction) {
    await db.collection("expense").add(transaction);

    dispatch({
      type: "ADD TRANSACTION",
      payload: getTrans,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
