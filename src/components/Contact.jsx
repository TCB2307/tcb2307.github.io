import ava02 from "../images/ava02.png";
import icon from "../images/icon.png";

function Contact() {
  return (
    <div>
      <div className="h-[20rem] flex justify-center">
        <div className="bg-[#D6D6D6] w-4/5 relative top-28 rounded-[1.3rem] flex md:w-[93%] skill-m:block">
          <div className="w-1/2 skill-m:w-full">
            <div className="px-10 pt-10 phone:px-5">
              <div className="font-semibold text-[2rem] pb-4">
                Let's have a chat
              </div>
              <div className="pb-6 h-[7rem] skill-m:h-auto">
                I’d be delighted to hear from you! Feel free to reach out if
                you’re interested in collaborating or learning more about me.
              </div>
              <div className="flex">
                <div className="bg-[#F4F4F4] flex px-4 py-2  cursor-pointer rounded-[0.5rem]">
                  <div className="font-semibold text-[1.3rem] flex items-center pr-3">
                    Contact Me
                  </div>
                  <div className="">
                    <img src={icon} alt="icon" className="w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 skill-m:hidden">
            <div className="flex items-end justify-center h-full">
              <img src={ava02} alt="ava02" className="w-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
