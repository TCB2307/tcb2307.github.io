import Intro from "./Intro";
import About from "./About";
import Skill from "./Skill";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div>
      <Intro />
      <About />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
