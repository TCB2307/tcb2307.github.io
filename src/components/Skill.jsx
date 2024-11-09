import website from "../images/website.png";
import email from "../images/email-icon.png";
import banner from "../images/banner.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import typescript from "../images/typescript.png";
import tailwind from "../images/tailwind.png";
import salesforce from "../images/salesforce.png";
import gulp from "../images/gulp.png";
import gsap from "../images/gsap.png";
import figma from "../images/figma.png";
import photoshop from "../images/photoshop.png";

function SkillDetail({ img, rightSideBorder, title, description, tools }) {
  const borderCss = rightSideBorder === true ? "border-r-2" : "";

  return (
    <div
      className={`${borderCss} border-black border-opacity-10 w-full h-[36rem]`}
    >
      <div className="flex justify-center mt-16">
        <img src={img} alt="logo" className="w-20" />
      </div>
      <div className=" flex justify-center mt-8">
        <div className="text-center w-4/5">
          <div className="text-2xl font-semibold">{title}</div>
          <div className="text-1xl mt-6 font-normal h-[9rem]">
            {description}
          </div>
          <div className="text-2xl mt-6 text-[#EB4A4A] font-medium">Tools</div>
          <div className="font-light mb-10 mt-4">
            <div className="flex space-x-2 justify-center">
              {tools.map((tool, index) => (
                <img key={index} src={tool} alt="logo" className="w-14" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skill() {
  return (
    <div className="flex justify-center relative bottom-20">
      <div className="bg-[#FFFEFE] max-w-[1500px] border-black rounded-3xl border-2 border-opacity-10">
        <div className="flex items-center">
          <SkillDetail
            img={website}
            rightSideBorder={true}
            title="Website"
            description="I create responsive, user-centered websites that are visually appealing and performance-optimized, leveraging the latest front-end technologies to deliver smooth, intuitive designs across all devices."
            tools={[html, tailwind, js, react, typescript]}
          />
          <SkillDetail
            img={email}
            rightSideBorder={true}
            title="Electrical Direct Emails"
            description="
Designed dynamic EDMs for clients like Myer and NAB, creating visually impactful advertising campaigns that effectively conveyed the brand's message and drove audience engagement across digital platforms."
            tools={[html, css, salesforce, gulp, figma]}
          />
          <SkillDetail
            img={banner}
            rightSideBorder={false}
            title="Banner"
            description="Developed engaging banners using GSAP, in order to create smooth animations to highlight brand messages. Focused on high-performance designs for a great user experience across all devices."
            tools={[html, css, js, gsap, photoshop]}
          />
        </div>
      </div>
    </div>
  );
}
