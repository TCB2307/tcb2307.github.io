import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>
      <Outlet />
    </div>
  );
}
