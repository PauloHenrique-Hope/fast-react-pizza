import { Link } from "react-router-dom";

export function Button({ children, disabled, to, type }) {
  // const className =
  //   "cursor-pointer bg-blue-500 text-blue-50 px-4 py-2 rounded-sm transition duration-300 hover:bg-blue-600 disabled:cursor-not-allowed";

  const base =
    "cursor-pointer bg-blue-500 text-blue-50 rounded-sm transition duration-300 hover:bg-blue-600 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-2",
    secondary: base + " px-2 py-2",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
