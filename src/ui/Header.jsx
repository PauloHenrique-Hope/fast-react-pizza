import { Link } from "react-router-dom";
import { Username } from "../features/user/UserName";

export function Header() {
  return (
    <header className="flex text-gray-100 bg-red-500 p-12 sm:justify-between">
      <Link className="text-6xl font-bold sm:text-8xl" to="/">
        Fast React Pizza
      </Link>
      <Username />
      {/* <p className="text-xl font-semibold underline sm:text-2xl">Satoko</p> */}
    </header>
  );
}
