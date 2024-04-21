import React, { useState } from 'react'
import '../style/first.css'
import search_icon from '../aseets/search.png'
import clear_icon from "../aseets/clear.png"
import cloud_icon from "../aseets/cloud.png";
import drizzle_icon from "../aseets/drizzle.png";
import rain_icon from "../aseets/rain.png";
import snow_icon from "../aseets/snow.png";
import wind_icon from "../aseets/wind.png";
import humidity_icon from "../aseets/humidity.png";
function Weather() {
  const api_key="ee3ff6994270ee448f665853bc1e9183";

  const [wicon, setwicon] = useState(cloud_icon);

  const search= async ()=>{
    const element=document.getElementsByClassName("cityInput")

    if(element[0].value===""){
      return 0;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const feel = document.getElementsByClassName("weather-feel");


    humidity[0].innerHTML = data.main.humidity+" %";
    wind[0].innerHTML = data.wind.speed+" km/h";
    temprature[0].innerHTML = data.main.temp+" °c";
    location[0].innerHTML = data.name;
    feel[0].innerHTML = "feels like  "+data.main.feels_like+"°c";

    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
      setwicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
      setwicon(cloud_icon)
    }
    else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
      setwicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
      setwicon(drizzle_icon)
    }
    else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
      setwicon(rain_icon)
    }
    else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
      setwicon(rain_icon)
    }
    else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
      setwicon(snow_icon)
    }
    else{
      setwicon(clear_icon);
    }
  }
  return (
    <div>

<div className="weatherapp">

<div className="top-bar">
  <input type="text" className="cityInput" placeholder="Search..." />

  <div className="search-icon" onClick={()=>{search()}}>
    <img src={search_icon} alt="" />
  </div>
</div>

<div className="weather-image"><img src={wicon} alt="" /></div>

<div className="weather-temp"></div>

<div className="weather-feel"></div>

<div className="weather-location"></div>

<div className="data-container">

  <div className="elements">

    <img src={humidity_icon} alt="" className="icon" />

    <div className="data">
      <div className="humidity-percent"></div>
      <div className="text">Humidity</div>
    </div>

  </div>

  <div className="elements">

    <img src={wind_icon} alt="" className="icon" />

    <div className="data">
      <div className="wind-rate"></div>
      <div className="text">Wind Speed</div>
    </div>

  </div>

</div>

</div>
    </div>
  )
}

export default Weather