import placeholder from "../images/placeholder.png";

function SkillDetail({ rightSideBorder, title, description, tools }) {
  const borderCss = rightSideBorder === true ? "border-r-2" : "";

  return (
    <div
      className={`${borderCss} border-black border-opacity-20 w-full h-[36rem]`}
    >
      <div className="flex justify-center mt-16">
        <img src={placeholder} alt="logo" className="w-40" />
      </div>
      <div className=" flex justify-center mt-10">
        <div className="text-center w-4/5">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="text-10 mt-6 font-light">{description}</div>
          <div className="text-10 mt-6 text-[#EB4A4A] font-medium">Tools</div>
          <div className="font-light mb-10 mt-4">
            {tools.map((tool, index) => (
              <div key={index} className="text-10">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skill() {
  return (
    <div className="flex justify-center relative bottom-20">
      <div className="bg-[#FFFEFE] w-4/5 border-black rounded-3xl border-2 border-opacity-20">
        <div className="flex items-center">
          <SkillDetail
            rightSideBorder={true}
            title="Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            tools={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
          />
          <SkillDetail
            rightSideBorder={true}
            title="Electrical Direct Emails"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            tools={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
          />
          <SkillDetail
            rightSideBorder={false}
            title="Banner"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt "
            tools={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
          />
        </div>
      </div>
    </div>
  );
}
