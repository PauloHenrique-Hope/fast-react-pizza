import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMenu } from "../../services/apiRestaurant";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "../../ui/Button";
import { addItem } from "../cart/cartSlice";

function Menu() {
  const menu = useLoaderData();

  const dispatch = useDispatch();

  function handleAddToCart(pizza) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    console.log(newItem);
    console.log("clicked");
  }

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 375px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 700px)": {
        slides: { perView: 3, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 1400px)": {
        slides: { perView: 6, spacing: 5 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <>
      <ul ref={sliderRef} className="keen-slider">
        {menu.map((pizza) => (
          <li className="keen-slider__slide number-slide1" key={pizza.id}>
            <div className="flex flex-col px-2  gap-2 mt-5 sm:mt-16 ">
              <img
                className="rounded-2xl "
                src={pizza.imageUrl}
                alt={pizza.name}
              />
              <p className="text-xl text-gray-600">{pizza.name}</p>
              <span className="text-xl text-gray-800">${pizza.unitPrice}</span>
              <Button onClick={() => handleAddToCart(pizza)} type="primary">
                Add to cart
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
