import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
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
      {/* <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul> */}

      <ul ref={sliderRef} className="keen-slider">
        {menu.map((pizza) => (
          <li className="keen-slider__slide number-slide1" key={pizza.id}>
            <div className="flex flex-col  gap-3 mt-10 sm:mt-16 px-2">
              <img
                className="rounded-2xl "
                src={pizza.imageUrl}
                alt={pizza.name}
              />
              <p className="text-xl text-gray-600">{pizza.name}</p>
              <span className="text-xl text-gray-800">${pizza.unitPrice}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  console.log(menu);
  return menu;
}

export default Menu;
