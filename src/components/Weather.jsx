import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import clear_icon from '../assets/clear.png'
import snow_icon from '../assets/snow.png'
import storm_icon from '../assets/storm.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {
  const inputRef = useRef(); // reference input element
  const weatherBoxRef = useRef(null); // reference weather box element ot allow dragging it around screen
  const [weatherData, setWeatherData] = useState(false); // store weather data

  //map weatehr icons based on weather codes
  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": storm_icon,
    "11n": storm_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please type in a city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Unable to find weather data");
    }
  };

  // initial search to display at open
  useEffect(() => {
    search("Antarctica");
  }, []);

  // Handle drag start
  const handleDragStart = (e) => {
    const box = weatherBoxRef.current;
    const rect = box.getBoundingClientRect();
    e.dataTransfer.setData("text/plain", `${e.clientX - rect.left},${e.clientY - rect.top}`);
  };

  // Handle dragging over the document body
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop action to reposition the weather box
  const handleDrop = (e) => {
    e.preventDefault();
    const box = weatherBoxRef.current;
    const [offsetX, offsetY] = e.dataTransfer.getData("text").split(",").map(Number);
    box.style.left = `${e.clientX - offsetX}px`;
    box.style.top = `${e.clientY - offsetY}px`;
  };

  return (
    <div
      className="weather"
      ref={weatherBoxRef}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ position: "absolute", cursor: "move" }}
    >
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Type in a city name" />
        <img src={search_icon} alt="Search" onClick={() => search(inputRef.current.value)} />
      </div>
      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="Weather Icon" className="weather-icon" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="location">{weatherData.location}</p>
          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity Icon" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind Icon" />
              <div>
                <p>{weatherData.windSpeed} km/hr</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
