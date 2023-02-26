import { useContext, useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { GlobalContext } from "../store/store";
import { iCityOptions } from "../types";
import Loader from "./Loader";

export default function ChangeCityModal() {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const {
    showSearchPopup,
    setShowSearchPopup,
    cityOptions,
    setCityOptions,
    cityDataLoading,
    searchForCity,
    getCityWeather,
  } = useContext(GlobalContext);

  const searchForCityGeoCords = (city: iCityOptions) => {
    getCityWeather(city);
    setQuery("");
    setShowSearchPopup(false);
  };

  const closeBtn = () => {
    setCityOptions(null);
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
            : "opacity-0 pointer-events-none "
        } absolute z-50 flex  transition-opacity duration-300  justify-center items-center top-0 left-0 w-full h-screen bg-sky-700 bg-opacity-50`}
      >
        <div
          className={` ${showSearchPopup ? "translate-y-0" : "translate-y-10 "}
        relative transform duration-300 mx-2 px-8 py-4 bg-white h-96 w-96 rounded-lg shadow-2xl `}
        >
          <button onClick={closeBtn}>
            <BsX className="focus:outline-none focus:ring focus:ring-violet-300 absolute top-0 right-0 m-2 text-2xl cursor-pointer hover:text-cyan-500 transition duration-200" />
          </button>
          <div className="relative">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              value={query}
              className="absolute top-0 left-0 w-full px-5 py-2 text-lg text-sky-600  rounded-lg border-2 border-cyan-500 focus:border-cyan-700 outline-none transition"
              placeholder="Search for city"
            />
            {cityDataLoading && (
              <Loader
                loaderColor="text-sky-500"
                className="absolute top-1 right-1"
              />
            )}
          </div>
          {showResults && (
            <div className="mt-14">
              {cityOptions?.map((city: any, index: number) => {
                return (
                  <div
                    key={index}
                    onMouseDown={() => searchForCityGeoCords(city)}
                    className="cursor-pointer hover:bg-gray-500 hover:bg-opacity-10 pt-2 pb-1"
                  >
                    {city.name} - {city.state} - {city.country}
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
