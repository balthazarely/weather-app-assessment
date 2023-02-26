interface iTempToggle {
  isCelsius: boolean;
  setIsCelsius: (value: boolean) => void;
}

export default function TempToggle({ isCelsius, setIsCelsius }: iTempToggle) {
  return (
    <div className=" w-[60px] relative ">
      <button
        className="z-0 h-[25px] w-[55px] rounded-full bg-textblue flex items-center transition duration-300  shadow"
        onClick={() => setIsCelsius(!isCelsius)}
      >
        <div
          id="switch-toggle"
          className={`${
            !isCelsius ? "translate-x-[30px]" : "translate-x-1"
          } w-[21px] h-[21px] relative rounded-full transition duration-200 transform bg-white p-1 text-black flex justify-center items-center`}
        ></div>
      </button>
      <div className="z-50 pointer-events-none  absolute top-0 h-[25px] w-full left-0 flex justify-center gap-[13px] items-center  text-black text-sm   ">
        <div
          className={` transition-colors duration-300 ${
            !isCelsius ? "text-white" : "text-sky-600"
          }`}
        >
          C<span>&#176;</span>
        </div>
        <div
          className={` transition-colors duration-300 ${
            isCelsius ? "text-white" : "text-sky-600"
          }`}
        >
          F<span>&#176;</span>
        </div>
      </div>
    </div>
  );
}
