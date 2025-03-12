import { Link } from "react-router-dom";

export function Button({ children, disabled, to, type, onClick }) {
  // const className =
  //   "cursor-pointer bg-blue-500 text-blue-50 px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-600 disabled:cursor-not-allowed";

  const base =
    "cursor-pointer font-semibold bg-blue-500 text-blue-50 rounded-sm transition duration-300 hover:bg-blue-600 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-2",
    small: base + " px-2 py-2",
    secondary:
      "cursor-pointer font-semibold px-2 py-2 text-black bg-gray-100 rounded-sm transition duration-300 hover:bg-gray-300 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
