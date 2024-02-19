import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const apiKey = "381d2f9684a691fc3e6fa8d941a5e6a1";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      });
  }, []);

  const weatherList = weather.map(
    ({ lat, lon, timezone, current, weather, hourly }) => (
      <section>
        <h3>{lat}</h3>
        <h3>{lon}</h3>
        <h3>{timezone}</h3>
        <h3>{current}</h3>
        <h3>{weather}</h3>
        <h3>{hourly}</h3>
      </section>
    )
  );
  return <Card>{weatherList}</Card>;
};

export default Weather;
