import axios from "axios";
import { useEffect, useState } from "react";
import useCurrentLocation from "./useCurrentLocation";

export default function useCurrentWeather() {
  const geolocationOptions = {
    enableHighAccuracy: true, // 높은 정확도 사용
    timeout: 1000*60*1, //1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000*3600*24 // 24hour
  }
  const {location, locationError} = useCurrentLocation(geolocationOptions);
  const [weather, setWeather] = useState();
  const [weatherError, setWeatherError] = useState();

  useEffect(() => {
    if (location) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}`)
      .then((result) => {
        setWeather(result.data);
      }).catch((error) => {
        setWeatherError(error);
      })
    }
  }, [])

  return {
    weather,
    weatherError
  }
}