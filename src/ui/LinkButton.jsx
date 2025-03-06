import { Link, useNavigate } from "react-router-dom";

export function LinkButton({ children, to }) {
  const navigate = useNavigate();

  const className =
    " text-sm text-blue-500 hover:text-blue-600 hover:text-xl duration-300 ease-in";

  if (to === "-1") {
    <button className={className} onClick={() => navigate(-1)}>
      {children}
    </button>;
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
