import { iSelectedCity } from "../types";
import { convertTempUnits } from "../utils/utilities";
import Loader from "./Loader";
import WeatherIcon from "./WeatherIcon";

interface iTodayWeatherDisplay {
  selectedCity: iSelectedCity | null;
  isCelsius: boolean;
}

export default function TodayWeatherDisplay({
  selectedCity,
  isCelsius,
}: iTodayWeatherDisplay) {
  return (
    <>
      <div className="w-full z-50">
        {selectedCity !== null ? (
          <div className="p-1 flex sm:flex-row flex-col  gap-2 justify-start  items-start ">
            <div className="flex">
              <div className="text-textblue text-5xl w-auto font-light  ">
                {convertTempUnits(
                  Number(selectedCity.weather.days[0].temp),
                  isCelsius
                )}
                &#176;
              </div>
              <WeatherIcon
                className="text-textblue -ml-1 text-6xl duration-200 transform"
                icon={selectedCity.weather.days[0].icon}
              />
            </div>
            <div className="text-left sm:text-base text-sm text-textblue ">
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
