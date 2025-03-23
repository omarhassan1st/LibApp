export const environment = (function () {
  const isProduction = false;
  const testingUrl = 'https://localhost:44323/WeatherForecast';
  const productionUrl = 'https://localhost:44323/WeatherForecast';

  return {
    isProduction,
    url: isProduction ? productionUrl : testingUrl,
  };
})();
