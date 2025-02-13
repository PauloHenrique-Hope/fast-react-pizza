import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

export function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen">
      {isLoading && <Loader />}
      <Header />
      <main className="">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
