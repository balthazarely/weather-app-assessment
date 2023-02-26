import { createContext, useState } from "react";
import { getGeoCords } from "../api/getGeoCords";
import { getWeather } from "../api/getWeather";
import {
  contextDefaultValues,
  ContextState,
  iCityOptions,
  iSelectedCity,
} from "../types";

export const GlobalContext = createContext<ContextState>(contextDefaultValues);

const GlobalProvider = ({ children }: any) => {
  const [showSearchPopup, setShowSearchPopup] = useState<boolean>(
    contextDefaultValues.showSearchPopup
  );
  const [cityOptions, setCityOptions] = useState<iCityOptions[] | [] | null>(
    []
  );
  const [selectedCity, setSelectedCity] = useState<iSelectedCity | null>(null);
  const [cityDataLoading, setCityDataLoading] = useState<boolean>(false);

  const searchForCity = async (query: string) => {
    setCityDataLoading(true);
    const data = await getGeoCords(query);
    setCityOptions(data);
    setCityDataLoading(false);
  };

  const getCityWeather = async (city: iCityOptions) => {
    setSelectedCity(null);
    const weather = await getWeather(city.lat, city.lon);
    const selectedCityWeather = {
      name: city.name,
      state: city.state,
      lat: city.lat,
      lon: city.lon,
      country: city.country,
      weather,
    };
    setCityOptions(null);
    localStorage.setItem(
      "weather-default-location",
      JSON.stringify(selectedCityWeather)
    );
    setSelectedCity(selectedCityWeather);
  };

  return (
    <GlobalContext.Provider
      value={{
        showSearchPopup,
        setShowSearchPopup,
        cityOptions,
        setCityOptions,
        selectedCity,
        setSelectedCity,
        cityDataLoading,
        setCityDataLoading,
        searchForCity,
        getCityWeather,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
