import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span>{quantity}&times;</span>
            <span>{name}</span>
          </div>
          <p>{formatCurrency(totalPrice)}</p>
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
