function SkillDetail({
  img,
  rightSideBorder,
  title,
  description,
  tools,
  skill,
}) {
  const borderCss = rightSideBorder === true ? "border-r-2" : "";

  return (
    <div
      className={`${borderCss} border-black border-opacity-10 w-full h-[36rem] skill-m:border-r-0 skill-m:h-[30rem] ${skill}`}
    >
      <div className="flex justify-center mt-16">
        <img src={img} alt="logo" className="w-20" />
      </div>
      <div className=" flex justify-center mt-8">
        <div className="text-center w-4/5 about:w-[85%] skill-text:w-[90%] skill-sm:w-[80%] phone:w-[90%]">
          <div className="text-2xl font-semibold about:text-[1.3rem] skill-text:text-[1.2rem] skill-m:text-2xl">
            {title}
          </div>
          <div className="mt-6 font-normal h-[9rem] about:text-[0.95rem] skill-sm:h-[6rem]">
            {description}
          </div>
          <div className="text-2xl mt-6 text-[#EB4A4A] font-medium about:mt-14 skill-text:mt-20 skill-sm:mt-14 phone:mt-8">
            Tools
          </div>
          <div className="font-light mb-10 mt-4">
            <div className="flex space-x-2 justify-center">
              {tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool}
                  alt="logo"
                  className="w-14 about:w-[3rem] skill-text:w-[2.7rem] skill-sm:w-[3.5rem] phone:w-[3.1rem]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetail;
