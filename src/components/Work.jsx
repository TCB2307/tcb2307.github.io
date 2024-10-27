import img02 from "../images/img02.jpg";

function WorkDetail() {
  return (
    <div className="flex flex-col w-11/12">
      <div className="flex justify-center">
        <img src={img02} alt="logo" className="w-11/12" />
      </div>
      <div className="flex justify-center text-4xl font-medium pb-2 pt-8">
        <div className="w-11/12 text-[1.3rem]">Website</div>
      </div>
      <div className="flex justify-center text-[0.9rem] font-light">
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
        <div className="flex justify-center bottom-20">
          <div className="w-5/6">
            <div className="flex">
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
