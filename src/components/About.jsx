function ColumnText({ text01, text02 }) {
  return (
    <div className="text-center flex flex-col w-40">
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </div>
      <div className="flex justify-around px-60">
        <ColumnText text01="02+" text02="Years experience" />
        <ColumnText text01="30+" text02="Completed project" />
        <ColumnText text01="02+" text02="Companies worked" />
      </div>
    </div>
  );
}
