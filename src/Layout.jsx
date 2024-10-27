import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}
