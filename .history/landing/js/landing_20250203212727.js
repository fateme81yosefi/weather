
function redirectBtn() {
  window.location.href = "https://weather-data-3c3c5.web.app/";
}

const weatherData = JSON.parse(localStorage.getItem('todayWeather'))

if (weatherData) {

  document.getElementById('city').innerText = `شهر: ${weatherData.city}`;
  document.getElementById('temperature').innerText = `دمای امروز: ${weatherData.temperature}°C`;
  document.getElementById('condition').innerText = `وضعیت هوا: ${weatherData.condition}`;
} else {
  document.getElementById('weather-info').innerText = 'داده‌ای برای وضعیت هوا موجود نیست.';
}