// Test ID: IIDSAT

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

const order = {
  id: "ABCDEF",
  customer: "Jonas",
  phone: "123456789",
  address: "Arroios, Lisbon , Portugal",
  priority: true,
  estimatedDelivery: "2027-04-25T10:00:00",
  cart: [
    {
      pizzaId: 7,
      name: "Napoli",
      quantity: 3,
      unitPrice: 16,
      totalPrice: 48,
    },
    {
      pizzaId: 5,
      name: "Diavola",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 3,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
    {
      pizzaId: 10,
      name: "Romana",
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
    // {
    //   pizzaId: 20,
    //   name: "Romana",
    //   quantity: 1,
    //   unitPrice: 15,
    //   totalPrice: 15,
    // },
    // {
    //   pizzaId: 30,
    //   name: "Romana",
    //   quantity: 1,
    //   unitPrice: 15,
    //   totalPrice: 15,
    // },
    // {
    //   pizzaId: 40,
    //   name: "Romana",
    //   quantity: 1,
    //   unitPrice: 15,
    //   totalPrice: 15,
    // },
  ],
  position: "-9.000,38.000",
  orderPrice: 95,
  priorityPrice: 19,
};

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const totalPizzaPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="flex flex-col mx-auto gap-2 p-4 md:w-[700px]">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-semibold text-xl">Order #{id} Status</h2>

        <div className="flex gap-3">
          {priority && (
            <span className="bg-red-500 text-red-100 px-2 py-2 rounded-sm">
              Priority
            </span>
          )}
          <span className="bg-green-500 text-green-100 px-2 py-2 rounded-sm">
            Preparing order
          </span>
        </div>
      </div>

      {/* <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p> */}
      <p className="text-center">
        (Estimated delivery: {formatDate(estimatedDelivery)})
      </p>

      <ul className="flex flex-col gap-2 divide-y divide-gray-200 overflow-auto h-20 sm:h-52">
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="flex flex-col gap-1.5 mt-5 ">
        <p>Price pizza: {formatCurrency(totalPizzaPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold ">
          To pay on delivery: {formatCurrency(totalPizzaPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;
