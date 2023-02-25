export const getGeoCords = async (query: string) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
