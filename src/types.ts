export interface iCityOptions {
  country: string;
  lat: number;
  lon: number;
  name: string;
  state: string;
  localNames?: iLocalString[];
}

type iLocalString = {
  name: string;
};

export interface iSelectedCity {
  lat: number;
  lon: number;
  name: string;
  country: string;
  state: string;
  weather: iWeatherType;
}

type iWeatherType = {
  address: string;
  days: iDaysType[];
  latitude: number;
  longitude: string;
  queryCost: number;
  resolvedAddress: string;
  stations: any;
  timezone: string;
  tzoffest: number;
};

type iDaysType = {
  conditions: string;
  datetime: string;
  temp: string;
  icon: string;
  windspeed: number;
};
