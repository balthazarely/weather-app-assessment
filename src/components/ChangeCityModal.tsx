import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { iCityOptions } from "../types";
import Loader from "./Loader";

interface iChangeCityInterface {
  searchForCity: (value: string) => void;
  cityOptions: iCityOptions[] | any[];
  getCityWeather: (state: iCityOptions) => void;
  setShowSearchPopup: (value: boolean) => void;
  showSearchPopup: boolean;
  cityDataLoading: boolean;
}

export default function ChangeCityModal({
  searchForCity,
  cityOptions,
  getCityWeather,
  setShowSearchPopup,
  showSearchPopup,
  cityDataLoading,
}: iChangeCityInterface) {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const search = (city: any) => {
    getCityWeather(city);
    setQuery("");
    setShowSearchPopup(false);
  };

  useEffect(() => {
    const timeOutId = setTimeout((e) => {
      if (query.length > 2) {
        searchForCity(query);
        setShowResults(true);
      }
      if (query.length < 2) {
        setShowResults(false);
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <>
      <div
        className={`${
          showSearchPopup
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } absolute z-50 flex transition-opacity duration-300  justify-center items-center top-0 left-0 w-full h-screen bg-sky-600 bg-opacity-50`}
      >
        <div className="relative mx-2 p-8 bg-white h-72 w-96 rounded-lg shadow-2xl ">
          <BsX
            onClick={() => setShowSearchPopup(false)}
            className="absolute top-0 right-0 m-2 text-2xl cursor-pointer"
          />
          <div className="relative">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              value={query}
              className="absolute top-0 left-0 w-full px-5 py-2 text-lg text-sky-600  rounded-lg border-2 border-cyan-500 focus:border-cyan-700 outline-none transition"
              placeholder="Search your query..."
            />
            {cityDataLoading && (
              <Loader
                loaderColor="text-sky-500"
                className="absolute top-1 right-1"
              />
            )}
          </div>

          {/* Search Results Container */}
          {showResults && (
            <div className="mt-12">
              {cityOptions.map((city: any, index: number) => {
                return (
                  <div
                    key={index}
                    onMouseDown={() => search(city)}
                    className="cursor-pointer hover:bg-gray-500 hover:bg-opacity-10 p-2"
                  >
                    {city.name} - {city.state}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
