import React from "react";
import AccountOperations from "./components/features/account/AccountOperations";
import BalanceDisplay from "./components/features/account/BalanceDisplay";
import Customer from "./components/features/customer/Customer";
import CreateCustomer from "./components/features/customer/CreateCustomer";
import "./App.css";

import { useSelector } from "react-redux";

const App = () => {
  const fullname = useSelector((state) => state.customer.fullname);
  console.log(fullname)
  return (
    <div>
      <h1>hello bank</h1>
      {fullname == "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;
