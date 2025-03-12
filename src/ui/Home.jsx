import { useSelector } from "react-redux";
import { CreateUser } from "../features/user/CreateUser";
import { Button } from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <section className="flex flex-col justify-center px-3 py-3 gap-6 sm:py-14">
      <h1 className="text-center text-3xl text-gray-700 font-bold sm:text-5xl">
        The best pizza.{" "}
        <p className="text-xl font-light text-gray-700 mt-1 sm:text-2xl">
          Straight out of the oven, straight to you.
        </p>
      </h1>
      <div className="m-auto">
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to={"/menu"} type="primary">
            Continuing
          </Button>
        )}
      </div>
    </section>
  );
}

export default Home;
