import Homepage from "./components/Homepage";
import Header from "./components/Header";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <Homepage />
      <About />
    </div>
  );
}
