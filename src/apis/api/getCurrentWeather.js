import axios from "axios";

const getCurrentWeather = async (location) => {
  if (location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    const response = await axios.get(apiUrl)
    .then((result) => {
      return result.data;
    }).catch((error) => {
      console.log('날씨 불러오기 오류 발생!');
      console.log(error);
    })
    return response;
  }
}

export default getCurrentWeather;