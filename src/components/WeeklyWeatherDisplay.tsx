import moment from "moment";
import { useState } from "react";
import { iSelectedCity, iDaysType } from "../types";
import { convertTempUnits } from "../utils/utilities";
import Loader from "./Loader";
import WeatherIcon from "./WeatherIcon";

interface iTodayWeatherDisplay {
  selectedCity: iSelectedCity | null;
  isCelsius: boolean;
}

export default function WeeklyWeatherDisplay({
  selectedCity,
  isCelsius,
}: iTodayWeatherDisplay) {
  return (
    <div className="max-w-[670px] bg-white h-[142px]  flex justify-between ">
      {selectedCity ? (
        <div className="grid-cols-6 sm:grid-cols-10 grid w-full divide-y-2 divide-x-2 divide-gray-200 ">
          {selectedCity.weather.days
            .slice(1, 6)
            .map((day: any, idx: number) => {
              return (
                <WeatherCard
                  day={day}
                  className={
                    idx === 3 || idx === 4
                      ? "sm:col-span-2 col-span-3"
                      : "col-span-2"
                  }
                  isCelsius={isCelsius}
                  key={idx}
                />
              );
            })}
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

function WeatherCard({
  day,
  isCelsius,
  className,
}: {
  day: iDaysType;
  isCelsius: boolean;
  className: string;
}) {
  return (
    <div
      className={`${className} w-full flex flex-col justify-center items-center perspective`}
    >
      <div className="font-semibold text-textgray ">
        {moment(day.datetime).format("ddd")}
      </div>
      <div className="flex items-center gap-2">
        <WeatherIcon
          className=" text-textblue sm:text-6xl xs:text-4xl  text-3xl   "
          icon={day.icon}
        />
        <div className="flex sm:hidden  text-textgray sm:text-xl text-lg font-bold">
          {convertTempUnits(day.temp, isCelsius)}&#176;
        </div>
      </div>
      <div className="hidden sm:flex  text-textgray text-xl font-bold">
        {convertTempUnits(day.temp, isCelsius)}&#176;
      </div>
    </div>
  );
}
