import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../ui/Button";
import { LinkButton } from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { clearCart } from "./cartSlice";

function Cart() {
  const userName = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  console.log(cart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col gap-5 mx-auto px-2 md:w-[800px]">
      <div className="flex justify-between p-2 items-center">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
        <h2 className="font-medium text-xl lg:text-2xl">
          Your cart, {userName}
        </h2>
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
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
