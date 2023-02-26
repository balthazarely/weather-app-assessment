// Context Types
export type ContextState = {
  showSearchPopup: boolean;
  setShowSearchPopup: (val: boolean) => void;
  cityOptions: iCityOptions[] | null;
  setCityOptions: (data: any) => void;
  selectedCity: iSelectedCity | null;
  setSelectedCity: (data: any) => void;
  cityDataLoading: boolean;
  setCityDataLoading: (val: boolean) => void;
  searchForCity: (val: string) => void;
  getCityWeather: (cityOptions: iCityOptions) => void;
};

export const contextDefaultValues: ContextState = {
  showSearchPopup: false,
  setShowSearchPopup: () => {},
  cityOptions: null,
  setCityOptions: () => {},
  selectedCity: null,
  setSelectedCity: () => {},
  cityDataLoading: false,
  setCityDataLoading: () => {},
  searchForCity: () => {},
  getCityWeather: () => {},
};

// Other Types
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

export type iDaysType = {
  conditions: string;
  datetime: string;
  temp: number;
  icon: string;
  windspeed: number;
};
