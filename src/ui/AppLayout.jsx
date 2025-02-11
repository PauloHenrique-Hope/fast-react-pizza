import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import CartOverview from "../features/cart/CartOverview";

export function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
