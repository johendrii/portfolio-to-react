import "./Project1.css";
import { Balance } from "./component/Balance";
import { IncomeExpenses } from "./component/IncomeExpenses";
import { TransactionList } from "./component/TransactionList";
import { AddTransaction } from "./component/AddTransaction";
import { Container } from "react-bootstrap";

import { GlobalProvider } from "./context/Project1State";

const Project1 = () => {
  return (
    <GlobalProvider>
      <Container fluid="sm" id="project1">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Container>
    </GlobalProvider>
  );
};

export default Project1;
