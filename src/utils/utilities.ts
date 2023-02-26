export const convertTempUnits = (temp: number, isCelsius: boolean) => {
  if (isCelsius) {
    let c = ((temp - 32) * 5) / 9;
    return Math.trunc(c);
  }
  return Math.trunc(temp);
};
