import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Today.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const api = {
   key: 'd6af8dede317fd610a52e712bbd7c205',
   base: "https://api.openweathermap.org/data/2.5/"
 }


const Today = () => {

   const [query, setQuery] = useState('');
   const [weather, setWeather] = useState({});

   const search = e => {
      if (e.key === "Enter") {
         fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
         .then(res => res.json())
         .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result)
         } )
            
      }
   }

   const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${month} ${date}, ${year}`
   }

   const toFahrenheit = (celcius) => {
      let cTemp = celcius;
      let cToF = cTemp * 9 / 5 + 32;
      return Math.floor(cToF) 
   }

   return(

    <>
    
    <div className="Today">


      {(typeof weather.main != "undefined") ? (
      <div>
         <div className="currentdayweather-container">
            <FontAwesomeIcon icon="sun" size="5x" color="gold" className="day-icon" />
            <div className="Degrees">{toFahrenheit(weather.main.temp)}&deg;F</div>
            <div className="weather">{weather.weather[0].main}</div>
         </div>
         <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
         </div>
      </div>
      ) : ('')}
    </div>
    <input type="text" className="Searchbar" placeholder="Search Zip" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search}>

    </input>
       
    </>

   )



}

export default Today;