import { Link } from "react-router-dom";

export function Button({ children, disabled, to }) {
  const className =
    "cursor-pointer bg-blue-500 text-blue-50 px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-600 disabled:cursor-not-allowed";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
