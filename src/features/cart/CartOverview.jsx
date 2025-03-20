import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <footer className="flex justify-between bottom-0 fixed w-full bg-gray-800 text-gray-100 font-medium p-4 ">
      <p>
        <span>{totalCartQuantity} pizzas</span>
        <span> {formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </footer>
  );
}

export default CartOverview;
