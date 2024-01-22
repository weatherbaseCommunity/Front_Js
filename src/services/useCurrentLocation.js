import { useEffect, useState } from "react";

export default function useCurrentLocation({options}) {
  const [location, setLocation] = useState();
  const [locationError, setLocationError] = useState();

  const handleSuccess = (pos) => {
    const {latitude, longitude} = pos.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = (error) => {
    setLocationError(error);
  }

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setLocationError("Geolocation is not supported");
      return ;
    }
    const fetchData = async () => {
      await geolocation.getCurrentPosition(handleSuccess, handleError, options);
    }
    fetchData();
  }, [options]);

  return {
    location,
    locationError
  };
}