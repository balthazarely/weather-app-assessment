import {
  WiSnowWind,
  WiRain,
  WiFog,
  WiStrongWind,
  WiCloudy,
  WiDayCloudy,
  WiNightAltCloudy,
  WiNightClear,
  WiDaySunny,
} from "react-icons/wi";

interface iWeatherIcon {
  icon: string;
  className: string;
}

export default function WeatherIcon({ icon, className }: iWeatherIcon) {
  switch (true) {
    case icon === "snow":
      return <WiSnowWind className={className} />;
    case icon === "rain":
      return <WiRain className={className} />;
    case icon === "fog":
      return <WiFog className={className} />;
    case icon === "wind":
      return <WiStrongWind className={className} />;
    case icon === "cloudy":
      return <WiCloudy className={className} />;
    case icon === "partly-cloudy-day":
      return <WiDayCloudy className={className} />;
    case icon === "partly-cloudy-night":
      return <WiNightAltCloudy className={className} />;
    case icon === "clear-day":
      return <WiDaySunny className={className} />;
    case icon === "clear-night":
      return <WiNightClear className={className} />;
    default:
      return <h4>missing icon</h4>;
  }
}
