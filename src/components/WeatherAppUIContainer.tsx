import { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import WeeklyWeatherDisplay from "./WeeklyWeatherDisplay";
import TodayWeatherDisplay from "./TodayWeatherDisplay";
import TempToggle from "./TempToggle";
import { GlobalContext } from "../store/store";
import useInitalizeApp from "../hooks/useInitalizeApp";

export default function WeatherAppUIContainer() {
  const { setShowSearchPopup, selectedCity } = useContext(GlobalContext);
  const [isCelsius, setIsCelsius] = useState(false);
  useInitalizeApp();

  return (
    <div className="max-w-[670px]">
      <div className="shadow-2xl relative bg-[#D9FBFF] mx-2">
        <div className=" absolute top-0 px-3 py-2 left-0 w-full flex flex-row justify-between">
          <TodayWeatherDisplay
            selectedCity={selectedCity}
            isCelsius={isCelsius}
          />
          <TempToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        </div>
        <div className="sm:pt-0 xs:pt-20 pt-32">
          <img src="/assets/Dallas.png" />
        </div>
        <img
          src="/assets/clouds.svg"
          className="absolute hidden xs:block top-16 z-40 -right-20 clouds-animation-1"
        />
        <img
          src="/assets/clouds-2.svg"
          className="absolute  hidden xs:block top-24 z-40  -left-16 clouds-animation-2"
        />
        <WeeklyWeatherDisplay
          selectedCity={selectedCity}
          isCelsius={isCelsius}
        />
      </div>
      <BiSearchAlt
        className="absolute text-3xl top-3 right-3 cursor-pointer duration-200 text-white hover:text-weatherBlue"
        onClick={() => setShowSearchPopup(true)}
      />
    </div>
  );
}
