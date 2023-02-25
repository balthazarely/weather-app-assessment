import moment from "moment";
import { iSelectedCity } from "../types";
import Loader from "./Loader";
import WeatherIcon from "./WeatherIcon";

interface iTodayWeatherDisplay {
  selectedCity: iSelectedCity | null;
  tempUnit: (value: number) => number;
}

export default function WeeklyWeatherDisplay({
  selectedCity,
  tempUnit,
}: iTodayWeatherDisplay) {
  return (
    <div className="max-w-[670px] bg-white h-[200px] py-4 flex justify-between ">
      {selectedCity ? (
        <div className="grid-cols-3  sm:grid-cols-3 md:grid-cols-5 gap-2 px-2  grid w-full">
          {selectedCity.weather.days
            .slice(1, 6)
            .map((day: any, idx: number) => (
              <div
                key={idx}
                className="w-full flex flex-col justify-center items-center"
              >
                <div className="font-semibold text-sky-800 ">
                  {moment(day.datetime).format("ddd")}
                </div>
                <div className="flex items-center gap-2">
                  <WeatherIcon
                    className=" text-sky-500 md:text-6xl text-5xl "
                    icon={day.icon}
                  />
                  <div className="flex md:hidden text-sky-600 text-xl font-bold">
                    {tempUnit(day.temp)}&#176;
                  </div>
                </div>
                <div className="hidden md:flex text-sky-600 text-xl font-bold">
                  {tempUnit(day.temp)}&#176;
                </div>
              </div>
            ))}
        </div>
      ) : (
        <Loader
          className="h-full w-full flex justify-center items-center "
          loaderColor="text-sky-500"
        />
      )}
    </div>
  );
}
