import moment from "moment";
import Loader from "./Loader";
import { FaMapMarkerAlt } from "react-icons/fa";
import { iSelectedCity } from "../types";

interface iCityInfomation {
  selectedCity: iSelectedCity | null;
}

export default function CityInfomation({ selectedCity }: iCityInfomation) {
  return (
    <div className="h-[65px] text-white">
      {selectedCity ? (
        <div className="">
          <div className="flex relative flex-col">
            <div className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt />
              <h1 className="text-2xl font-bold ">
                {selectedCity.name}, {selectedCity.state}
              </h1>
            </div>
          </div>
          <h3 className="text-center">
            {moment(selectedCity.weather.days[0].datetime).format(
              "dddd, MMM  Do, YYYY"
            )}
          </h3>
        </div>
      ) : (
        <Loader
          className="h-full w-full flex justify-center items-center "
          loaderColor="text-white"
        />
      )}
    </div>
  );
}
