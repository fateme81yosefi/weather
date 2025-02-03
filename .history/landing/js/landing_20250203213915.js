
function redirectBtn() {
  window.location.href = "https://weather-data-3c3c5.web.app/";
}

const getWeatherDataFromCookie = () => {
  const cookies = document.cookie.split('; ');
  console.log(cookies)
  for (let cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'data') {
          return JSON.parse(decodeURIComponent(value));
      }
  }
};

const weatherDataFromCookie = getWeatherDataFromCookie();
console.log(weatherDataFromCookie);  // { temperature: '25°C', condition: 'Clear' }
