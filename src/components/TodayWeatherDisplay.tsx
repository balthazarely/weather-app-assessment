import React from "react";
import { iSelectedCity } from "../types";
import Loader from "./Loader";
import WeatherIcon from "./WeatherIcon";

interface iTodayWeatherDisplay {
  selectedCity: iSelectedCity | null;
  tempUnit: (value: number) => number;
}

export default function TodayWeatherDisplay({
  selectedCity,
  tempUnit,
}: iTodayWeatherDisplay) {
  return (
    <>
      <div className=" absolute top-3 left-3 ">
        {selectedCity !== null ? (
          <div className="flex gap-2 items-end">
            <div className="text-sky-600 text-5xl w-auto font-light  ">
              {tempUnit(Number(selectedCity.weather.days[0].temp))}&#176;
            </div>
            <WeatherIcon
              className="text-sky-500 text-6xl duration-200 transform translate-y-2"
              icon={selectedCity.weather.days[0].icon}
            />
            <div className="text-sm text-left text-sky-600">
              <div>{selectedCity.weather.days[0].conditions}</div>
              <div>{selectedCity.weather.days[0].windspeed} mph</div>
            </div>
          </div>
        ) : (
          <Loader
            className="h-full w-full flex justify-center items-center "
            loaderColor="text-sky-500"
          />
        )}
      </div>
    </>
  );
}
