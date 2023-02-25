import { useEffect, useState } from "react";
import { getGeoCords } from "../api/getGeoCords";
import { getWeather } from "../api/getWeather";
import { iCityOptions, iSelectedCity } from "../types";
import ChangeCityModal from "./ChangeCityModal";
import CityInfomation from "./CityInfomation";
import Layout from "./Layout";
import TempUIContainer from "./TempUIContainer";

const defaultLocation = {
  name: "Dallas",
  country: "US",
  state: "TX",
  lat: 32.7762719,
  lon: -96.7968559,
};

export default function WeatherComponent() {
  const [cityOptions, setCityOptions] = useState<iCityOptions[]>([]);
  const [selectedCity, setSelectedCity] = useState<iSelectedCity | null>(null);
  const [showSearchPopup, setShowSearchPopup] = useState<boolean>(false);
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
    setCityOptions([]);
    localStorage.setItem(
      "weather-default-location",
      JSON.stringify(selectedCityWeather)
    );
    setSelectedCity(selectedCityWeather);
  };

  useEffect(() => {
    if (localStorage.getItem("weather-default-location")) {
      const userDefaultLocation = JSON.parse(
        localStorage.getItem("weather-default-location") || "{}"
      );
      getCityWeather(userDefaultLocation);
    } else {
      getCityWeather(defaultLocation);
    }
  }, []);

  return (
    <Layout>
      <CityInfomation selectedCity={selectedCity} />
      <TempUIContainer
        selectedCity={selectedCity}
        setShowSearchPopup={setShowSearchPopup}
      />
      <ChangeCityModal
        cityDataLoading={cityDataLoading}
        setShowSearchPopup={setShowSearchPopup}
        showSearchPopup={showSearchPopup}
        cityOptions={cityOptions}
        getCityWeather={getCityWeather}
        searchForCity={searchForCity}
      />
    </Layout>
  );
}
