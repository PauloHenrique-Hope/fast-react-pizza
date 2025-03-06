import { Button } from "../../ui/Button";
import { LinkButton } from "../../ui/LinkButton";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 1,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 2,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 3,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },

  {
    pizzaId: 4,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },

  {
    pizzaId: 5,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex flex-col gap-5 mx-auto px-2 md:w-[800px]">
      <div className="flex justify-between p-2 items-center">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <h2 className="font-medium text-xl lg:text-2xl">Your cart, %NAME%</h2>
      </div>

      <ul className="flex flex-col gap-1 divide-y divide-stone-200 overflow-y-auto h-40 md:h-48 lg:h-64">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex mt-4 gap-2">
        <Button to="/order/new" type="primary">
          Order
        </Button>
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
