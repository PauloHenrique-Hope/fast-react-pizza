function CartOverview() {
  return (
    <footer className="flex justify-between bottom-0 fixed w-full bg-gray-800 text-gray-100 font-medium p-4 ">
      <p>
        <span>23 pizzas</span>
        <span> $23.45</span>
      </p>
      <a href="#">Open cart &rarr;</a>
    </footer>
  );
}

export default CartOverview;
