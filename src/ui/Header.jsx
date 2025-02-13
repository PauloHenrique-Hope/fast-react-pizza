import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex text-gray-100 bg-red-500 p-12">
      <Link className="text-6xl font-bold " to="/">
        Fast React Pizza
      </Link>
      <p className="text-xl font-semibold underline">Satoko</p>
    </header>
  );
}
