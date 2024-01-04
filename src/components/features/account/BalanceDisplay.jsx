import { useSelector } from "react-redux";
import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((store) => store.account);
  return <div className="balance">
   {account.isLoading ? "loading..": formatCurrency(account.balance)}
  </div>;
}

export default BalanceDisplay;
