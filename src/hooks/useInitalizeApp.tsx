import { useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";

export default function useInitalizeApp() {
  const { getCityWeather } = useContext(GlobalContext);

  const defaultLocation = {
    name: "Dallas",
    country: "US",
    state: "TX",
    lat: 32.7762719,
    lon: -96.7968559,
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

  return useInitalizeApp;
}
