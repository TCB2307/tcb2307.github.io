import Homepage from "./components/Homepage";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";

export default function App() {
  return (
    <div>
      <div className="sticky top-0">
        <Header />
      </div>
      <Homepage />
      <div className="absolute">
        <About />
        <Skill />
      </div>
    </div>
  );
}
