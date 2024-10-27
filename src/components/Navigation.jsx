import logo from "../images/logo.svg";

export default function Navigation() {
  return (
    <div className="flex border-b-2 pb-4 pt-4 bg-white">
      <div className="flex w-2/6 items-center">
        <img src={logo} alt="logo" className="w-10 ml-8" />
      </div>
      <div className="w-4/6 mr-40">
        <div className="flex justify-between text-2xl font-semibold text-[#14BECA]">
          <div className="flex items-center justify-center px-5 py-3">
            About
          </div>
          <div className="flex items-center justify-center px-5 py-3">
            Skills
          </div>
          <div className="flex items-center justify-center px-5 py-3">
            Projects
          </div>
          <div className="flex items-center justify-center px-5 py-3">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
}
