import { useSelector } from "react-redux";

export function Username() {
  const userName = useSelector((state) => state.user.username);
  console.log(userName);
  return (
    <div className="text-xl font-semibold underline sm:text-2xl">
      {userName}
    </div>
  );
}
