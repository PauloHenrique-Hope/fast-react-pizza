import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <section className="flex flex-col justify-center px-3 py-3 gap-6 sm:py-14">
      <h1 className="text-center text-3xl text-gray-700 font-bold sm:text-5xl">
        The best pizza.{" "}
        <p className="text-xl font-light text-gray-700 mt-1 sm:text-2xl">
          Straight out of the oven, straight to you.
        </p>
      </h1>
      <CreateUser />
    </section>
  );
}

export default Home;
