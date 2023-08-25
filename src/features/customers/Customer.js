import { useSelector } from "react-redux";

function Customer() {
  //create a subscription to the store
  const customer = useSelector((store) => store.customer.fullName);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
