const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "DELETE TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default AppReducer;

// export default (state, action) => {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }
