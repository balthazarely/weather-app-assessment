import { useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { iSelectedCity } from "../types";
import WeeklyWeatherDisplay from "./WeeklyWeatherDisplay";
import TodayWeatherDisplay from "./TodayWeatherDisplay";
import TempToggle from "./TempToggle";

interface iTempUIContainer {
  selectedCity: iSelectedCity | null;
  setShowSearchPopup: (value: boolean) => void;
}

export default function TempUIContainer({
  selectedCity,
  setShowSearchPopup,
}: iTempUIContainer) {
  const [isCelsius, setIsCelsius] = useState(false);

  const tempUnit = (temp: number) => {
    if (isCelsius) {
      let c = ((temp - 32) * 5) / 9;
      return Math.trunc(c);
    }
    return Math.trunc(temp);
  };

  return (
    <div className="max-w-[670px]">
      <div className="shadow-2xl relative  bg-[#D9FBFF] mx-2">
        <TodayWeatherDisplay selectedCity={selectedCity} tempUnit={tempUnit} />
        <div className="sm:pt-0 pt-20">
          <img src="/assets/Dallas.png" />
        </div>
        <img
          src="/assets/clouds.svg"
          className="absolute hidden sm:block top-16 -right-20 clouds-animation-1"
        />
        <img
          src="/assets/clouds-2.svg"
          className="absolute  hidden sm:block top-24 -left-16 clouds-animation-2"
        />
        <WeeklyWeatherDisplay selectedCity={selectedCity} tempUnit={tempUnit} />
        <TempToggle isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
        <BsFillGearFill
          className="absolute bottom-3 right-3 cursor-pointer duration-200 hover:text-sky-600"
          onClick={() => setShowSearchPopup(true)}
        />
      </div>
    </div>
  );
}
