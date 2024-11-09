function ColumnText({ text01, text02 }) {
  return (
    <div className="text-center flex flex-col w-[7rem]">
      <div className="text-4xl font-medium pb-2">{text01}</div>
      <div className="text-xl font-light">{text02}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-[#14BECA] flex flex-col space-y-4 px-12 pt-10 text-white pb-[8rem]">
      <div className="flex justify-center text-10 text-5xl font-medium pt-4">
        About myself
      </div>
      <div className="flex justify-center px-80 py-4 text-center text-xl pb-10">
        With expertise in front-end development, I also create engaging banners
        and dynamic electronic emails. I bring a combination of technical skill,
        creative problem-solving, and a user-focused approach to every project,
        ensuring visually compelling and seamless digital experiences.
      </div>
      <div className="flex justify-around px-60">
        <ColumnText text01="02+" text02="Years experience" />
        <ColumnText text01="30+" text02="Completed project" />
        <ColumnText text01="02+" text02="Clients total" />
      </div>
    </div>
  );
}
