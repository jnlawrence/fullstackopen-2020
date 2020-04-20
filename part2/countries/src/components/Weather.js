import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [ currentWeather, setCurrentWeather ] = useState({})

    const api_key = process.env.REACT_APP_API_KEY
    const URL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`


// TODO -> FETCH THE CITYS WEATHER DETAILS FROM THE API     REACT_APP_API_KEY=f8f32734864a293d84e783a6758c5547
// http://api.weatherstack.com/current?access_key=f8f32734864a293d84e783a6758c5547&query=helsinki
// ($env:REACT_APP_API_KEY = "f8f32734864a293d84e783a6758c5547") -and (npm start)

    useEffect(()=> {
        axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`)
            .then(response => {
                const obj = {
                    temp: response.data.current.temperature,
                    icons: response.data.current.weather_icons[0],
                    windSpeed: response.data.current.wind_speed,
                    windDir: response.data.current.wind_dir
                }
                setCurrentWeather(obj)
            })
    }, [])

    return (
        <div>
            <h1>Weather in {capital} </h1>
           
            <p>
                <b>temperature: </b> {currentWeather.temp} Celsius
            </p>
            <img src={currentWeather.icons} alt="weather icon" />
            <p>
                <b>wind: </b> {currentWeather.windSpeed} mph direction {currentWeather.windDir}
            </p>
                

        </div>
    )
}

export default Weather;