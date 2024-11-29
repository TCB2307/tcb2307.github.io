import logo02 from "../images/logo02.png";
import phone from "../images/phone.png";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";

function ContactCard({ img, text }) {
  return (
    <div className="w-full flex md:justify-center md:mb-9 md:gap-5">
      <div className="flex justify-center items-center">
        <div>
          <img src={img} alt="logo" className="w-16 h-auto" />
        </div>
      </div>
      <div className="flex items-center pl-4 text-white text-3xl font-light footer-all:text-[1.6rem] footer-all:pr-4">
        {text}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-full bg-[#14BECA]">
      <div className="flex flex-col">
        <div className="flex justify-center pt-44">
          <img src={logo02} alt="logo02" className="w-20" />
        </div>
        <div className="flex justify-center text-center">
          <div className=" w-[30rem] text-white font-light text-3xl pt-10 pb-20 proj-sm:px-10">
            Design is where art meets logic, and code brings it to life.
          </div>
        </div>
        <div className="flex justify-center pb-20">
          <div className="w-4/5 flex pl-24 footer-all:pl-0 md:block">
            <ContactCard img={phone} text="+61 415240402" />
            <ContactCard img={email} text="Personal Email" />
            <ContactCard img={linkedin} text="LinkedIn Profile" />
          </div>
        </div>
        <div className="flex justify-center text-white font-extralight text-xs pb-6">
          © 2024 Made by Andy Bui
        </div>
      </div>
    </div>
  );
}

export default Footer;
