export const getWeather = async (lat: number, lng: number) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?temperature_unit=fahrenheit&include=days&iconSet=icons1&key=${process.env.REACT_APP_VISUAL_CROSSING_API_KEY}&contentType=json`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
