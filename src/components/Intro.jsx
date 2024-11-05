import myAva from "../images/avatar.png";
import arrow from "../images/arrow.svg";
import img01 from "../images/img01.png";
import Button from "./Button";

function Intro() {
  return (
    <div>
      <div className="px-12 pt-8 ">
        <div className="text-1xl justify-center items-center pt-10 hidden md:flex">
          <img src={myAva} alt="Avatar" className="w-60" />
        </div>
        <div className="flex py-8">
          <div className="flex flex-col space-y-4 w-3/5 pt-10 pl-14 mac:w-[70%] md:w-[100%] mac:pl-6 md:pl-[0px] sm:pt-0">
            <div className="text-7xl font-semibold py-4 m:text-6xl phone:text-6xl">
              I'm Andy
            </div>
            <div className="flex space-x-5 font-normal text-[2.8rem] pt-4 lg:text-[2rem] phone:text-[1.4rem] sm:flex-col sm:space-x-0 sm:space-y-6">
              <div className="px-5 py-3 border-2 text-[#14BECA] lg:py-2 self-start">
                Digital
              </div>
              <div className="flex items-center font-medium sm:hidden">&</div>
              <div className="px-5 py-3 border-2 text-[#14BECA] lg:py-2 self-start">
                Frontend Developer
              </div>
            </div>
            <div className="text-[1.1rem] pt-5 phone:text-[1rem]">
              <span>
                I design and build clean, simple solutions websites with
                code.&nbsp;
              </span>
              <br className="phone:hidden" />
              Bringing ideas to life through thoughtful design is what I love
              most.
            </div>
            <div className="flex space-x-4 text-xs pt-3 phone:text-[0.65rem]">
              <Button text="WEBSITES" />
              <Button text="EDMS" />
              <Button text="ANIMATIONS" />
            </div>
            <div className="flex space-x-4 pt-3">
              <div className="text-1xl underline underline-offset-8">
                FIND OUT MORE
              </div>
              <img src={arrow} alt="arrow" className="w-5" />
            </div>
          </div>
          <div className="text-1xl w-2/5 flex justify-center items-center pt-10 mac:w-[30%] md:hidden">
            <img src={myAva} alt="Avatar" className="w-80" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={img01} alt="IMG01" className="" />
      </div>
    </div>
  );
}

export default Intro;
