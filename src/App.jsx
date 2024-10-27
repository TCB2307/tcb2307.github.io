import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
