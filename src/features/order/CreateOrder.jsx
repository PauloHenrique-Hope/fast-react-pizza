import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const cart = fakeCart;

  return (
    <section className="flex flex-col gap-6 px-3 mt-5 sm:px-16 md:w-[800px] xl:w-[800px] xl:mx-auto">
      <h2 className="text-3xl text-gray-700 sm:text-4xl">
        Ready to order? Let&apos;s go!
      </h2>

      <form className="flex flex-col gap-2 xl:gap-4">
        <div>
          <input
            className="p-2 bg-indigo-50 w-full outline-none sm:p-4"
            type="text"
            name="customer"
            required
            placeholder="First Name"
          />
        </div>

        <div>
          <input
            className="p-2 bg-indigo-50 w-full outline-none sm:p-4"
            type="tel"
            name="phone"
            required
            placeholder="Phone"
          />
        </div>

        <div>
          <input
            className="p-2 bg-indigo-50 w-full outline-none sm:p-4"
            type="text"
            name="address"
            required
            placeholder="Address"
          />
        </div>

        <div className="flex gap-2">
          <input className="" type="checkbox" name="priority" id="priority" />
          <label className="text-gray-700 sm:text-xl" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <button
            disabled={isSubmitting}
            className="cursor-pointer bg-blue-500 text-blue-50 px-4 py-2 rounded-sm transition duration-300hover:bg-blue-600 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateOrder;
