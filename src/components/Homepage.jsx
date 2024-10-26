import "../css/main.css";
import myAva from "../images/avatar.png";
import Button from "../components/Button";

function Homepage() {
  return (
    <div className="px-12 py-8">
      <div className="flex py-8 space-x-14">
        <div className="flex flex-col space-y-4">
          <div className="text-6xl font-bold py-4">I'm Andy</div>
          <div className="flex space-x-3 font-medium text-3xl">
            <div className="px-4 py-2 border-2 text-[#14BECA]">Digital</div>
            <div className="flex items-center">&</div>
            <div className="px-4 py-2 border-2 text-[#14BECA]">
              Frontend Developer
            </div>
          </div>
          <div className="text-1xl">
            I design and build clean, simple solutions websites with code.
            Bringing ideas to life through thoughtful design is what I love
            most.
          </div>
          <div className="flex space-x-4 text-1xl">
            <Button text="WEBSITES" />
            <Button text="EDMS" />
            <Button text="ANIMATIONS" />
          </div>
          <div className="text-1xl">FIND OUT MORE</div>
          <div className="text-1xl">BUTTON</div>
        </div>
        <div className="text-1xl">
          <img src={myAva} alt="Avatar" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
