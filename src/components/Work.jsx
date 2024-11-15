import img02 from "../images/img02.jpg";

function WorkDetail() {
  return (
    <div className="flex flex-col w-11/12 skill-m:mx-[5%]">
      <div className="flex justify-center skill-m:border-l-[1px] skill-m:border-r-[1px]">
        <img src={img02} alt="logo" className="w-11/12 skill-m:w-full" />
      </div>
      <div className="flex justify-center text-4xl font-medium pb-2 pt-8 skill-m:pl-[5%] skill-m:pt-[8%] skill-m:pb-[3%] skill-m:border-l-[1px] skill-m:border-r-[1px]">
        <div className="w-11/12 text-[1.3rem]">Website</div>
      </div>
      <div className="flex justify-center text-[0.9rem] font-light skill-m:pl-[5%] skill-m:pb-[10%] skill-m:border-l-[1px] skill-m:border-r-[1px] skill-m:border-b-[1px]">
        <div className="w-11/12">
          <div className="px-3 py-[6px] border-2 inline-block cursor-pointer">
            VIEW PROJECT
          </div>
        </div>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div>
      <div className="pb-20 border-black border-opacity-20 border-b">
        <div className="flex justify-center text-10 text-5xl font-medium pt-4 pb-16">
          Work
        </div>
        <div className="flex justify-center bottom-20 skill:mx-5">
          <div className=" max-w-[1540px]">
            <div className="flex skill-sm:block phone:block">
              <WorkDetail />
              <WorkDetail />
              <WorkDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
