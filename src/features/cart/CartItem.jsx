import { Button } from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="flex gap-1.5 p-2 items-center justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-2">
        <p>{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
