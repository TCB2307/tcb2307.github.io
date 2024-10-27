import Intro from "./Intro";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";

export default function Homepage() {
  return (
    <div>
      <Intro />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}
